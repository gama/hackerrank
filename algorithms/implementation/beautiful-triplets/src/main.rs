// https://www.hackerrank.com/challenges/beautiful-triplets/problem

use std::env;
use std::fs::File;
use std::io::LineWriter;
use std::io::Write;
use std::io::prelude::*;

fn beautiful_triplets(dist: u16, sequence: &Vec<u16>) -> u16 {
    if sequence.len() < 3 {
        return 0;
    }

    let mut i = 0;
    let mut j = 0;
    let mut k = 0;
    let mut num_triplets = 0;

    while i < sequence.len() && j < sequence.len() && k < sequence.len() {
        let dist_jk = sequence[k] - sequence[j];
        let dist_ij = sequence[j] - sequence[i];

        if dist_jk > dist {
            j += 1;
        } else if dist_jk < dist {
            k += 1;
        } else if dist_ij > dist {
            i += 1;
        } else if dist_ij < dist {
            j += 1;
        } else {
            let num_k = (k..sequence.len()).into_iter().take_while(|n| sequence[k] == sequence[*n]).count();
            let num_j = (j..sequence.len()).into_iter().take_while(|n| sequence[j] == sequence[*n]).count();
            let num_i = (i..sequence.len()).into_iter().take_while(|n| sequence[i] == sequence[*n]).count();
            num_triplets += num_i * num_j * num_k;
            i += num_i; j += num_j; k += num_k;
        }
    }

    num_triplets as u16
}


// ----- Tests -----
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn tests() {
        assert_eq!(beautiful_triplets(1, &vec![]), 0);
        assert_eq!(beautiful_triplets(1, &vec![1]), 0);
        assert_eq!(beautiful_triplets(1, &vec![1, 2]), 0);
        assert_eq!(beautiful_triplets(1, &vec![1, 2, 2]), 0);
        assert_eq!(beautiful_triplets(1, &vec![1, 2, 3]), 1);
        assert_eq!(beautiful_triplets(1, &vec![2, 2, 3, 4, 5]), 3);
        assert_eq!(beautiful_triplets(1, &vec![1, 2, 3, 4, 8, 9]), 2);
        assert_eq!(beautiful_triplets(1, &vec![1, 2, 3, 4, 7, 8, 9]), 3);
        assert_eq!(beautiful_triplets(1, &vec![1, 2, 2, 3, 4, 7, 8, 9]), 5);
        assert_eq!(beautiful_triplets(1, &vec![1, 2, 2, 2, 3, 4, 7, 8, 9]), 7);
        assert_eq!(beautiful_triplets(1, &vec![1, 2, 2, 2, 3, 3, 4, 7, 8, 9]), 13);
        assert_eq!(beautiful_triplets(2, &vec![1, 2, 3, 4, 5]), 1);
        assert_eq!(beautiful_triplets(2, &vec![1, 2, 3, 4, 5, 6]), 2);
        assert_eq!(beautiful_triplets(2, &vec![1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 13]), 3);
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

fn read_params() -> Result<(u16, Vec<u16>), Box<dyn std::error::Error>> {
    let nd: Vec<u16> = std::io::stdin().lock().lines().next()
        .expect("no line in buffer")
        .expect("failed to read line")
        .trim().split(" ").map(|n| n.parse::<u16>().unwrap()).collect::<Vec<u16>>();
    assert_eq!(nd.len(), 2);

    let sequence: Vec<u16> = std::io::stdin().lock().lines().next()
        .expect("no line in buffer")
        .expect("failed to read line")
        .trim().split(" ").map(|n| n.parse::<u16>().unwrap()).collect::<Vec<u16>>();

    Ok((nd[1], sequence))
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let (d, sequence) = read_params()?;
    let num_triplets = beautiful_triplets(d, &sequence);

    let mut out = create_writer();
    writeln!(out, "{}", num_triplets)?;

    Ok(())
}
