// https://www.hackerrank.com/challenges/lisa-workbook/problem

use std::env;
use std::fs::File;
use std::io::prelude::*;
use std::io::LineWriter;
use std::io::Write;

fn lisas_workbook(problems_per_page: u8, problems_in_each_chapter: &Vec<u8>) -> u8 {
    let mut num_special_problems: u8 = 0;
    let mut page: u16 = 1;
    for num_problems_in_chapter in problems_in_each_chapter.iter() {
        for problem_id_in_chapter in 1..(num_problems_in_chapter + 1) {
            if problem_id_in_chapter as u16 == page {
                num_special_problems += 1;
            }
            if problem_id_in_chapter % problems_per_page == 0 ||
               problem_id_in_chapter == *num_problems_in_chapter {
                page += 1;
            }
        }
    }

    num_special_problems
}


// ----- Tests -----
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn tests() {
        assert_eq!(lisas_workbook(3, &vec![1]), 1);
        assert_eq!(lisas_workbook(3, &vec![2]), 1);
        assert_eq!(lisas_workbook(3, &vec![3]), 1);
        assert_eq!(lisas_workbook(3, &vec![4]), 1);
        assert_eq!(lisas_workbook(3, &vec![1, 2, 3]), 3);
        assert_eq!(lisas_workbook(1, &vec![1]), 1);
        assert_eq!(lisas_workbook(1, &vec![2]), 2);
        assert_eq!(lisas_workbook(1, &vec![3]), 3);
        assert_eq!(lisas_workbook(1, &vec![3, 1, 2, 3,]), 3);
        assert_eq!(lisas_workbook(1, &vec![3, 99]), 3);
        assert_eq!(lisas_workbook(3, &vec![4, 2]), 1);
        assert_eq!(lisas_workbook(3, &vec![4, 2, 6, 1, 10]), 4);
        assert_eq!(lisas_workbook(7, &vec![1, 10, 12, 4, 11, 6, 8, 15, 23, 24, 23, 24, 39, 34, 50, 3, 58, 62, 71, 79, 95, 100, 2, 2, 100, 100, 100, 100, 100, 100, 1, 100, 100, 100, 100, 100, 3, 100, 100, 100]), 12);
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

fn read_params() -> Result<(u8, Vec<u8>), Box<dyn std::error::Error>> {
    let nk = std::io::stdin()
        .lock().lines().next()
        .expect("no line in buffer")
        .expect("failed to read line")
        .trim().split(" ")
        .map(|n| n.parse::<u8>().unwrap())
        .collect::<Vec<u8>>();
    let (num_chapters, problems_per_page) = (nk[0], nk[1]);

    let problems_per_chapter = std::io::stdin()
        .lock().lines().next()
        .expect("no line in buffer")
        .expect("failed to read line")
        .trim().split(" ")
        .map(|n| n.parse::<u8>().unwrap())
        .collect::<Vec<u8>>();
    assert_eq!(problems_per_chapter.len(), num_chapters as usize);

    Ok((problems_per_page, problems_per_chapter))
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut out = create_writer();

    let (problems_per_page, problems_per_chapter) = read_params()?;
    let num_special_problems = lisas_workbook(problems_per_page, &problems_per_chapter);
    writeln!(out, "{}", num_special_problems)?;

    Ok(())
}
