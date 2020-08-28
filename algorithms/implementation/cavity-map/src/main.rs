// https://www.hackerrank.com/challenges/cavity-map/problem

use std::env;
use std::fs::File;
use std::io::prelude::*;
use std::io::LineWriter;
use std::io::Write;

fn cavity_map(map: &Vec<&[u8]>) -> Vec<Vec<u8>> {
    let mut map = map.iter()
        .map(|e| e.iter().cloned().collect())
        .collect::<Vec<Vec<u8>>>();

    for r in 1 .. map.len() - 1 {
        for c in 1 .. map[r].len() - 1 {
            let up    = map[r - 1][c];
            let down  = map[r + 1][c];
            let left  = map[r][c - 1];
            let right = map[r][c + 1];
            let curr  = &mut map[r][c];
            if *curr > up && *curr > down && *curr > left && *curr > right {
                *curr = 'X' as u8;
            }
        }
    }

    map
}


// ----- Tests -----
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn tests() {
        assert_eq!(cavity_map(&vec![b"989", b"191", b"111"]),
                               vec![b"989", b"1X1", b"111"]);
        assert_eq!(cavity_map(&vec![b"1112", b"1912", b"1892", b"1234"]),
                               vec![b"1112", b"1X12", b"18X2", b"1234"]);

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

fn read_params() -> Result<Vec<String>, Box<dyn std::error::Error>> {
    let size: u8 = std::io::stdin()
        .lock().lines().next()
        .expect("no line in buffer")
        .expect("failed to read line")
        .trim().parse::<u8>().unwrap();

    let mut map: Vec<String> = vec![String::from("") ; size as usize];
    for row in 0..size {
        map[row as usize] = std::io::stdin()
            .lock().lines().next()
            .expect("no line in buffer")
            .expect("failed to read line")
            .trim().to_owned();
        assert_eq!(map[row as usize].len(), size as usize);
    }

    Ok(map)
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut out = create_writer();

    let map: Vec<String> = read_params()?;
    let refs_map: Vec<&[u8]> = map.iter().map(|n| n.as_bytes()).collect();
    let map_with_cavities = cavity_map(&refs_map);
    for row in map_with_cavities {
        writeln!(out, "{}", String::from_utf8(row).unwrap())?
    }

    Ok(())
}
