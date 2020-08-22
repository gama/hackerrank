// https://www.hackerrank.com/challenges/service-lane/problem

use std::env;
use std::fs::File;
use std::io::prelude::*;
use std::io::LineWriter;
use std::io::Write;

#[derive(Clone)]
struct RoadChunk {
    width: u8,
    end2: usize,
    end3: usize
}

struct Highway {
    chunks: Vec<RoadChunk>,
}

impl Highway {
    fn new(widths: Vec<u8>) -> Highway {
        let mut chunks = widths.iter().map(|w| RoadChunk{ width: *w, end2: 0, end3: 0 })
                                       .collect::<Vec<RoadChunk>>();
        widths.iter().rev().enumerate().fold((0, 0), |(mut n2, mut n3) , (mut i, weight)| {
            i = chunks.len() - 1 - i;
            chunks[i].end2 = if *weight >= 2 { i + n2 } else { 0 };
            chunks[i].end3 = if *weight >= 3 { i + n3 } else { 0 };
            n2 = if *weight >= 2 { n2 + 1 } else { 0 };
            n3 = if *weight >= 3 { n3 + 1 } else { 0 };
            (n2, n3)
        });

        Highway { chunks }
    }

    fn service_lane(self: &Self, start_index: u32, end_index: u32) -> u32 {
        let chunk: &RoadChunk = &self.chunks[start_index as usize];
        if chunk.width == 3 && end_index as usize <= chunk.end3 {
            3 
        } else if chunk.width >= 2 && end_index as usize <= chunk.end2 {
            2
        } else {
            1
        }
    }
}

// ----- Tests -----
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn tests() {
        let highway = Highway::new(vec![2, 3, 1, 2, 3, 2, 3, 3]);
        assert_eq!(highway.service_lane(0, 3), 1);
        assert_eq!(highway.service_lane(4, 6), 2);
        assert_eq!(highway.service_lane(6, 7), 3);
        assert_eq!(highway.service_lane(3, 5), 2);
        assert_eq!(highway.service_lane(0, 7), 1);
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

fn read_params() -> Result<(Vec<u8>, Vec<(u32, u32)>), Box<dyn std::error::Error>> {
    let nt = std::io::stdin()
        .lock().lines().next()
        .expect("no line in buffer")
        .expect("failed to read line")
        .trim().split(" ")
        .map(|n| n.parse::<u32>().unwrap())
        .collect::<Vec<u32>>();
    let (num_widths, num_tests) = (nt[0], nt[1]);

    let widths = std::io::stdin()
        .lock().lines().next()
        .expect("no line in buffer")
        .expect("failed to read line")
        .trim().split(" ")
        .map(|n| n.parse::<u8>().unwrap())
        .collect::<Vec<u8>>();
    assert_eq!(widths.len(), num_widths as usize);

    let tests = (0..num_tests).map(|_| {
        let values: Vec<u32> = std::io::stdin()
            .lock().lines().next()
            .expect("no line in buffer")
            .expect("failed to read line")
            .trim().split(" ")
            .map(|n| n.parse::<u32>().unwrap())
            .collect::<Vec<u32>>();
        assert_eq!(values.len(), 2);

        (values[0], values[1])
    }).collect::<Vec<(u32, u32)>>();

    Ok((widths, tests))
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut out = create_writer();

    let (widths, tests) = read_params()?;
    let highway = Highway::new(widths);
    for (start_index, end_index) in tests {
        let max_width = highway.service_lane(start_index, end_index);
        writeln!(out, "{}", max_width)?;
    }

    Ok(())
}
