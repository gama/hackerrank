// https://www.hackerrank.com/challenges/fair-rations/problem

use std::env;
use std::fs::File;
use std::io::prelude::*;
use std::io::LineWriter;
use std::io::Write;

fn fair_rations(num_breads_each_person: Vec<u8>) -> Option<u16> {
    let odds: Vec<usize> = num_breads_each_person.iter()
        .enumerate().filter(|(_i, n)| *n % 2 == 1).map(|(i, _n)| i).collect();
    if odds.len() % 2 == 1 {
        return None;
    }
    Some(odds.chunks(2).fold(0u16, |acc, chunk| acc + (chunk[1] - chunk[0]) as u16) * 2u16)
}


// ----- Tests -----
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn tests() {
        assert_eq!(fair_rations(vec![4, 5, 6, 7]), Some(4));
        assert_eq!(fair_rations(vec![2, 3, 4, 5, 6]), Some(4));
        assert_eq!(fair_rations(vec![2, 3, 4, 5, 6, 2, 4, 6, 5, 1, 8]), Some(6));
        assert_eq!(fair_rations(vec![2, 3, 4, 5, 6, 2, 4, 6, 5, 8, 1]), Some(8));
        assert_eq!(fair_rations(vec![2, 3, 4, 5, 6, 2, 4, 5, 6, 1, 8]), Some(8));
        assert_eq!(fair_rations(vec![2, 3, 4, 5, 6, 2, 4, 5, 6, 8, 1]), Some(10));
        assert_eq!(fair_rations(vec![1, 2, 2, 2, 1, 1, 2, 2, 1]), Some(14));
        assert_eq!(fair_rations(vec![2, 2]), Some(0));
        assert_eq!(fair_rations(vec![1, 2]), None);
        assert_eq!(fair_rations(vec![1, 2, 2]), None);
        assert_eq!(fair_rations(vec![1, 2, 2, 4]), None);
        assert_eq!(fair_rations(vec![1, 2, 2, 3, 1, 4]), None);
        assert_eq!(fair_rations(vec![1, 2, 3, 4]), Some(4));
        assert_eq!(fair_rations(vec![2, 3, 3, 4]), Some(2));
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

fn read_params() -> Result<Vec<u8>, Box<dyn std::error::Error>> {
    let num_people: u16 = std::io::stdin()
        .lock().lines().next()
        .expect("no line in buffer")
        .expect("failed to read line")
        .trim().parse::<u16>().unwrap();

    let num_breads_each_person: Vec<u8> = std::io::stdin()
        .lock().lines().next()
        .expect("no line in buffer")
        .expect("failed to read line")
        .trim().split(" ")
        .map(|n| n.parse::<u8>().unwrap()).collect();
    assert_eq!(num_breads_each_person.len(), num_people as usize);

    Ok(num_breads_each_person)
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut out = create_writer();

    let num_breads_each_person = read_params()?;
    match fair_rations(num_breads_each_person) {
        Some(num_breads) => writeln!(out, "{}", num_breads)?,
        None => writeln!(out, "{}", "NO")?
    };

    Ok(())
}
