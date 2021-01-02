// https://www.hackerrank.com/challenges/the-time-in-words/problem

use std::env;
use std::fs::File;
use std::io::prelude::*;
use std::io::LineWriter;
use std::io::Write;

fn the_time_in_words(hour: u8, minutes: u8) -> String {
    assert!(hour >= 1 && hour <= 12);
    assert!(minutes < 60);

    if minutes == 0 {
        return format!("{} o' clock", hour_in_words(hour));
    } else if minutes <= 30 {
        return format!("{} past {}", minutes_in_words(minutes), hour_in_words(hour));
    } else {
        let hour = if hour == 12 { 1 } else { hour + 1 };
        let minutes = 60 - minutes;
        return format!("{} to {}", minutes_in_words(minutes), hour_in_words(hour));
    }
}

fn hour_in_words(hour: u8) -> &'static str {
    return number_in_words(hour);
}

fn minutes_in_words(minutes: u8) -> String {
    match minutes {
        1 => return String::from("one minute"),
        15 | 45 => return String::from("quarter"),
        30 => return String::from("half"),
        _ => return format!("{} minutes", number_in_words(minutes)),
    };
}

fn number_in_words(hour: u8) -> &'static str {
    let index: usize = NUMBERS_IN_WORDS
        .binary_search_by(|(k, _)| k.cmp(&hour))
        .unwrap();
    return NUMBERS_IN_WORDS[index].1;
}

static NUMBERS_IN_WORDS: &[(u8, &'static str)] = &[
    (0u8, "zero"),
    (1u8, "one"),
    (2u8, "two"),
    (3u8, "three"),
    (4u8, "four"),
    (5u8, "five"),
    (6u8, "six"),
    (7u8, "seven"),
    (8u8, "eight"),
    (9u8, "nine"),
    (10u8, "ten"),
    (11u8, "eleven"),
    (12u8, "twelve"),
    (13u8, "thirteen"),
    (14u8, "fourteen"),
    (15u8, "fifteen"),
    (16u8, "sixteen"),
    (17u8, "seventeen"),
    (18u8, "eighteen"),
    (19u8, "nineteen"),
    (20u8, "twenty"),
    (21u8, "twenty one"),
    (22u8, "twenty two"),
    (23u8, "twenty three"),
    (24u8, "twenty four"),
    (25u8, "twenty five"),
    (26u8, "twenty six"),
    (27u8, "twenty seven"),
    (28u8, "twenty eight"),
    (29u8, "twenty nine"),
];

// ----- Tests -----
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn tests() {
        assert_eq!(the_time_in_words(1, 00), "one o' clock");
        assert_eq!(the_time_in_words(5, 00), "five o' clock");
        assert_eq!(the_time_in_words(12, 00), "twelve o' clock");
        assert_eq!(the_time_in_words(5, 01), "one minute past five");
        assert_eq!(the_time_in_words(5, 10), "ten minutes past five");
        assert_eq!(the_time_in_words(5, 15), "quarter past five");
        assert_eq!(the_time_in_words(5, 28), "twenty eight minutes past five");
        assert_eq!(the_time_in_words(5, 30), "half past five");
        assert_eq!(the_time_in_words(5, 40), "twenty minutes to six");
        assert_eq!(the_time_in_words(5, 45), "quarter to six");
        assert_eq!(the_time_in_words(5, 47), "thirteen minutes to six");
        assert_eq!(the_time_in_words(5, 59), "one minute to six");
        assert_eq!(the_time_in_words(11, 59), "one minute to twelve");
        assert_eq!(the_time_in_words(12, 59), "one minute to one");
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

fn read_params() -> Result<(u8, u8), Box<dyn std::error::Error>> {
    let stdin = std::io::stdin();
    let mut inputln = stdin.lock().lines();

    let hour: u8 = inputln
        .next()
        .unwrap()
        .unwrap()
        .trim()
        .parse::<u8>()
        .unwrap();
    let minutes: u8 = inputln
        .next()
        .unwrap()
        .unwrap()
        .trim()
        .parse::<u8>()
        .unwrap();
    Ok((hour, minutes))
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let (hour, minutes): (u8, u8) = read_params()?;
    let result = the_time_in_words(hour, minutes);
    writeln!(create_writer(), "{}", result)?;
    Ok(())
}
