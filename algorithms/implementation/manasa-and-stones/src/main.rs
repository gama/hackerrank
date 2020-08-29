// https://www.hackerrank.com/challenges/manasa-and-stones/problem

use std::env;
use std::fs::File;
use std::io::prelude::*;
use std::io::LineWriter;
use std::io::Write;

fn manasa_and_stones(num_stones: u16, a: u16, b: u16) -> Vec<u32> {
    let mut values: Vec<u32> = vec![0];
    for _ in 1..num_stones {
        for i in 0..values.len() {
            values[i] += a as u32;
        }
        values.push(values.last().unwrap() - a as u32 + b as u32);
    }
    values.sort();
    values.dedup();
    values
}


// ----- Tests -----
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn tests() {
        assert_eq!(manasa_and_stones(1, 1, 2), vec![0]);
        assert_eq!(manasa_and_stones(2, 1, 2), vec![1, 2]);
        assert_eq!(manasa_and_stones(3, 1, 2), vec![2, 3, 4]);
        assert_eq!(manasa_and_stones(1, 10, 100), vec![0]);
        assert_eq!(manasa_and_stones(2, 10, 100), vec![10, 100]);
        assert_eq!(manasa_and_stones(3, 10, 100), vec![20, 110, 200]);
        assert_eq!(manasa_and_stones(4, 10, 100), vec![30, 120, 210, 300]);
        assert_eq!(manasa_and_stones(5, 10, 100), vec![40, 130, 220, 310, 400]);
        assert_eq!(manasa_and_stones(58, 69, 24), vec![1368, 1413, 1458, 1503, 1548, 1593, 1638, 1683, 1728, 1773, 1818, 1863, 1908, 1953, 1998, 2043, 2088, 2133, 2178, 2223, 2268, 2313, 2358, 2403, 2448, 2493, 2538, 2583, 2628, 2673, 2718, 2763, 2808, 2853, 2898, 2943, 2988, 3033, 3078, 3123, 3168, 3213, 3258, 3303, 3348, 3393, 3438, 3483, 3528, 3573, 3618, 3663, 3708, 3753, 3798, 3843, 3888, 3933]);
        assert_eq!(manasa_and_stones(83, 86, 81), vec![6642, 6647, 6652, 6657, 6662, 6667, 6672, 6677, 6682, 6687, 6692, 6697, 6702, 6707, 6712, 6717, 6722, 6727, 6732, 6737, 6742, 6747, 6752, 6757, 6762, 6767, 6772, 6777, 6782, 6787, 6792, 6797, 6802, 6807, 6812, 6817, 6822, 6827, 6832, 6837, 6842, 6847, 6852, 6857, 6862, 6867, 6872, 6877, 6882, 6887, 6892, 6897, 6902, 6907, 6912, 6917, 6922, 6927, 6932, 6937, 6942, 6947, 6952, 6957, 6962, 6967, 6972, 6977, 6982, 6987, 6992, 6997, 7002, 7007, 7012, 7017, 7022, 7027, 7032, 7037, 7042, 7047, 7052]);
        assert_eq!(manasa_and_stones(73, 25, 25), vec![1800]);
        assert_eq!(manasa_and_stones(12, 73, 82), vec![803, 812, 821, 830, 839, 848, 857, 866, 875, 884, 893, 902]);
        assert_eq!(manasa_and_stones(5, 3, 23),   vec![12, 32, 52, 72, 92]);
    }
}

// ----- I/O boilerplate -----
fn create_writer() -> LineWriter<Box<dyn Write>> {
    let writer: Box<dyn Write> = match env::var("OUTPUT_PATH") {
        Ok(path_str) => Box::new(File::create(path_str).unwrap()),
        Err(_) => Box::new(std::io::stdout()),
    };
    LineWriter::new(writer)
}

fn read_params() -> Result<Vec<(u16, u16, u16)>, Box<dyn std::error::Error>> {
    let stdin = std::io::stdin();
    let mut inputln = stdin.lock().lines();

    let num_tests: u8 = inputln.next().unwrap().unwrap().trim().parse::<u8>().unwrap();

    let tests = (0..num_tests).map(|_| {
        let n: u16 = inputln.next().unwrap().unwrap().trim().parse::<u16>().unwrap();
        let a: u16 = inputln.next().unwrap().unwrap().trim().parse::<u16>().unwrap();
        let b: u16 = inputln.next().unwrap().unwrap().trim().parse::<u16>().unwrap();
        (n, a, b)
    }).collect::<Vec<(u16, u16, u16)>>();

    Ok(tests)
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut out = create_writer();
    let tests: Vec<(u16, u16, u16)> = read_params()?;
    for test in tests {
        let result = manasa_and_stones(test.0, test.1, test.2);
        let result_str = result.iter().map(|n| n.to_string())
                                      .collect::<Vec<String>>()
                                      .join(" ");
        writeln!(out, "{}", result_str)?;
    }

    Ok(())
}
