// https://www.hackerrank.com/challenges/flatland-space-stations/problem

use std::env;
use std::fs::File;
use std::io::prelude::*;
use std::io::LineWriter;
use std::io::Write;

fn flatland_space_stations(num_cities: u32, mut cities_with_space_stations: Vec<u32>) -> u32 {
    if cities_with_space_stations.is_empty() {
        return 0;
    }

    cities_with_space_stations.sort();
    let mut deltas = cities_with_space_stations.windows(2)
        .map(|w| (w[1] - w[0]) / 2)
        .collect::<Vec<u32>>();
    deltas.push(*cities_with_space_stations.first().unwrap());
    deltas.push(num_cities - 1 - cities_with_space_stations.last().unwrap());
    *deltas.iter().max().unwrap()
}


// ----- Tests -----
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn tests() {
        assert_eq!(flatland_space_stations(3, vec![0]), 2);
        assert_eq!(flatland_space_stations(3, vec![2]), 2);
        assert_eq!(flatland_space_stations(3, vec![1]), 1);
        assert_eq!(flatland_space_stations(3, vec![0, 2]), 1);
        assert_eq!(flatland_space_stations(5, vec![0, 4]), 2);
        assert_eq!(flatland_space_stations(6, vec![0, 1, 2, 3, 4, 5]), 0);
        assert_eq!(flatland_space_stations(6, vec![0, 1, 2, 4, 3, 5]), 0);
        assert_eq!(flatland_space_stations(7, vec![0, 6]), 3);
        assert_eq!(flatland_space_stations(7, vec![0, 5]), 2);
        assert_eq!(flatland_space_stations(7, vec![1, 6]), 2);
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

fn read_params() -> Result<(u32, Vec<u32>), Box<dyn std::error::Error>> {
    let nm = std::io::stdin()
        .lock().lines().next()
        .expect("no line in buffer")
        .expect("failed to read line")
        .trim().split(" ")
        .map(|n| n.parse::<u32>().unwrap())
        .collect::<Vec<u32>>();
    let (num_cities, num_cities_with_space_stations) = (nm[0], nm[1]);

    let cities_with_space_stations = std::io::stdin()
        .lock().lines().next()
        .expect("no line in buffer")
        .expect("failed to read line")
        .trim().split(" ")
        .map(|n| n.parse::<u32>().unwrap())
        .collect::<Vec<u32>>();
    assert_eq!(cities_with_space_stations.len(), num_cities_with_space_stations as usize);

    Ok((num_cities, cities_with_space_stations))
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut out = create_writer();

    let (num_cities, cities_with_space_stations) = read_params()?;
    let maximum_distance = flatland_space_stations(num_cities, cities_with_space_stations);
    writeln!(out, "{}", maximum_distance)?;

    Ok(())
}
