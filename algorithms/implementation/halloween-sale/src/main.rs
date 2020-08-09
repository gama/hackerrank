use std::env;
use std::fs::File;
use std::io::LineWriter;
use std::io::Write;
use std::io::prelude::*;

fn halloween_sale(max_price: u16, discount: u16, min_price: u16, mut budget: u16) -> u16 {
    let mut num_games: u16 = 0;
    let mut price: u16 = max_price;
    while budget >= price {
        num_games += 1;
        budget -= price;
        price = std::cmp::max(min_price as i16, price as i16 - discount as i16) as u16;
    }
    num_games
}


// ----- Tests -----
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn tests() {
        assert_eq!(halloween_sale(1, 1, 1, 1), 1);
        assert_eq!(halloween_sale(2, 1, 1, 1), 0);
        assert_eq!(halloween_sale(1, 1, 1, 0), 0);
        assert_eq!(halloween_sale(20, 3, 6, 0), 0);
        assert_eq!(halloween_sale(20, 3, 6, 19), 0);
        assert_eq!(halloween_sale(20, 3, 6, 20), 1);
        assert_eq!(halloween_sale(20, 3, 6, 21), 1);
        assert_eq!(halloween_sale(20, 3, 6, 36), 1);
        assert_eq!(halloween_sale(20, 3, 6, 37), 2);
        assert_eq!(halloween_sale(20, 3, 6, 38), 2);
        assert_eq!(halloween_sale(20, 3, 6, 50), 2);
        assert_eq!(halloween_sale(20, 3, 6, 51), 3);
        assert_eq!(halloween_sale(20, 3, 6, 52), 3);
        assert_eq!(halloween_sale(20, 3, 6, 61), 3);
        assert_eq!(halloween_sale(20, 3, 6, 62), 4);
        assert_eq!(halloween_sale(20, 3, 6, 69), 4);
        assert_eq!(halloween_sale(20, 3, 6, 70), 5);
        assert_eq!(halloween_sale(20, 3, 6, 75), 5);
        assert_eq!(halloween_sale(20, 3, 6, 76), 6);
        assert_eq!(halloween_sale(20, 3, 6, 80), 6);
        assert_eq!(halloween_sale(20, 3, 6, 81), 6);
        assert_eq!(halloween_sale(20, 3, 6, 82), 7);
        assert_eq!(halloween_sale(8, 2, 1, 8),  1);
        assert_eq!(halloween_sale(8, 2, 1, 14), 2);
        assert_eq!(halloween_sale(8, 2, 1, 18), 3);
        assert_eq!(halloween_sale(8, 2, 1, 20), 4);
        assert_eq!(halloween_sale(8, 2, 1, 21), 5);
        assert_eq!(halloween_sale(8, 2, 1, 22), 6);
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

fn read_params() -> Result<(u16, u16, u16, u16), Box<dyn std::error::Error>> {
    let array: Vec<u16> = std::io::stdin().lock().lines().next()
        .expect("no line in buffer")
        .expect("failed to read line")
        .trim().split(" ").map(|n| n.parse::<u16>().unwrap()).collect();
    assert_eq!(array.len(), 4);

    let tup: (u16, u16, u16, u16) = (array[0], array[1], array[2], array[3]);
    Ok(tup)
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let (p, d, m, s) = read_params()?;
    let num_games = halloween_sale(p, d, m, s);

    let mut out = create_writer();
    out.write_fmt(format_args!("{}\n", num_games))?;

    Ok(())
}
