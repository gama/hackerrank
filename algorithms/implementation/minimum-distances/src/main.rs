use std::env;
use std::fs::File;
use std::io::LineWriter;
use std::io::Write;
use std::io::prelude::*;

const MAX_VALUE: usize = 100000;

fn minimum_distances(array: &Vec<i32>) -> i32 {
    let mut last_index: [i32; MAX_VALUE] = [-(MAX_VALUE as i32); MAX_VALUE];

    let min_distance = array.into_iter().enumerate().fold(MAX_VALUE as i32, |min, (i, e)| {
        let distance: i32 = (i as i32) - last_index[*e as usize];
        last_index[*e as usize] = i as i32;
        std::cmp::min(min, distance)
    });
    if min_distance >= array.len() as i32 { -1 } else { min_distance }
}

// ----- Tests -----
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn tests() {
        assert_eq!(minimum_distances(&vec![3, 2, 1, 2, 3]), 2);
        assert_eq!(minimum_distances(&vec![7, 1, 3, 4, 1, 7]), 3);
        assert_eq!(minimum_distances(&vec![1]), -1);
        assert_eq!(minimum_distances(&vec![1, 2]), -1);
        assert_eq!(minimum_distances(&vec![1, 1]), 1);
        assert_eq!(minimum_distances(&vec![1, 2, 1]), 2);
        assert_eq!(minimum_distances(&vec![1, 2, 3, 1]), 3);
        assert_eq!(minimum_distances(&vec![1, 2, 3, 2]), 2);
        assert_eq!(minimum_distances(&vec![1, 2, 1, 3]), 2);
        assert_eq!(minimum_distances(&vec![99999, 99999]), 1);
        assert_eq!(minimum_distances(&vec![99999, 1, 99999]), 2);
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

fn read_array() -> Result<Vec<i32>, Box<dyn std::error::Error>> {
    let size = std::io::stdin().lock().lines().next()
        .expect("no line in buffer")
        .expect("failed to read line")
        .trim().parse::<usize>()?;

    let array: Vec<i32> = std::io::stdin().lock().lines().next()
        .expect("no line in buffer")
        .expect("failed to read line")
        .trim().split(" ").map(|n| n.parse::<i32>().unwrap()).collect();
    assert_eq!(size, array.len());

    Ok(array)
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let array = read_array()?;
    let min_distance: i32 = minimum_distances(&array);

    let mut out = create_writer();
    out.write_fmt(format_args!("{}\n", min_distance))?;

    Ok(())
}
