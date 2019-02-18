#[no_mangle]
pub extern "C" fn fact(mut n: u32) -> u32 {
    let mut result = 1;
    while n > 0 {
        result = result * n;
        n = n - 1;
    }
    result
}
