


function hienThiKetNoi() {
    let loaiKH = document.getElementById("loaiKH").value;
    let inputKetNoi = document.getElementById("soKetNoi");
    let labelKetNoi = document.getElementById("labelKetNoi");

    if (loaiKH === "doanhNghiep") {
        inputKetNoi.classList.remove("hidden");
        labelKetNoi.classList.remove("hidden");
    } else {
        inputKetNoi.classList.add("hidden");
        labelKetNoi.classList.add("hidden");
    }
}

function tinhTien() {
    let loaiKH = document.getElementById("loaiKH").value;
    let soKenh = Number(document.getElementById("soKenh").value);
    let soKetNoi = Number(document.getElementById("soKetNoi").value);
    let tongTien = 0;

    if (loaiKH === "nhaDan") {
        tongTien = 4.5 + 20.5 + (soKenh * 7.5);
    } else if (loaiKH === "doanhNghiep") {
        tongTien = 15 + 75;
        if (soKetNoi > 10) {
            tongTien += (soKetNoi - 10) * 5;
        }
        tongTien += soKenh * 50;
    }

    document.getElementById("result").innerHTML = `Tổng tiền: ${tongTien.toLocaleString("en-US")} $`;
}
