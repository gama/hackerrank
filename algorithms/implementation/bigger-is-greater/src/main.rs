// https://www.hackerrank.com/challenges/bigger-is-greater/problem

use std::env;
use std::fs::File;
use std::io::prelude::*;
use std::io::LineWriter;
use std::io::Write;
use std::iter::Iterator;

fn bigger_is_greater(word: &str) -> String {
    let mut bytes = word.as_bytes().to_owned();

    let mut split_index: Option<usize> = None;
    for i in (1..bytes.len()).rev() {
        if bytes[i] > bytes[i - 1] {
            split_index = Some(i - 1);
            break;
        }
    }
    if split_index.is_none() {
        return "no answer".to_owned();
    }

    let split_index    = split_index.unwrap();
    let split_char     = bytes[split_index];
    let suffix: &[u8]  = &bytes[(split_index + 1)..];
    let (min_index, _) = suffix.iter().enumerate()
        .filter(|(_i, char)| **char > split_char)
        .min_by_key(|(_i, char)| **char - split_char).unwrap();

    bytes.swap(split_index, split_index + 1 + min_index);
    bytes[(split_index + 1)..].sort();

    std::str::from_utf8(&bytes).unwrap().to_string()
}

// ----- Tests -----
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn tests() {
        assert_eq!(bigger_is_greater("abcd"), "abdc");
        assert_eq!(bigger_is_greater("ab"), "ba");
        assert_eq!(bigger_is_greater("bb"), "no answer");
        assert_eq!(bigger_is_greater("hefg"), "hegf");
        assert_eq!(bigger_is_greater("dhck"), "dhkc");
        assert_eq!(bigger_is_greater("dkhc"), "hcdk");
        assert_eq!(bigger_is_greater("fjzeye"), "fjzyee");
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
    let stdin = std::io::stdin();
    let mut inputln = stdin.lock().lines();

    let num_words: usize = inputln.next().unwrap().unwrap().trim().parse().expect("number");
    let words: Vec<String> = (0..num_words)
        .map(|_| inputln.next().unwrap().unwrap().trim().to_owned())
        .collect();
    Ok(words)
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let words = read_params()?;
    let mut writer = create_writer();
    for word in words {
        let result = bigger_is_greater(&word);
        writeln!(writer, "{}", result)?;
    }
    Ok(())
}
