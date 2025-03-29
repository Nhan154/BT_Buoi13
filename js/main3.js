/**
 * IPO
 * 
 * Input: hoTen, tongTN, nguoiPhuThuoc
 * 
 * Process:
 * 
 * Output: Thuế thu nhập cá nhân
 */





let thueTNCN = 0

const tinhThuNhapCT = (tongTN, nguoiPhuThuoc) => {
    let thuNhapChiuThue = tongTN - 4000000 - nguoiPhuThuoc * 1600000;
    return thuNhapChiuThue; // Trả về tổng điểm
}



function tinhThue() {
    let hoTen = document.getElementById("inputhoTen").value;
    let tongTN = Number(document.getElementById("inputtongTN").value);
    let nguoiPhuThuoc = Number(document.getElementById("inputnguoiPhuThuoc").value);
    console.log(hoTen, tongTN, nguoiPhuThuoc);

    let thuNhapChiuThue = tinhThuNhapCT(tongTN, nguoiPhuThuoc);
    console.log(thuNhapChiuThue);
    if (thuNhapChiuThue < 0) {
        alert("Không hợp lệ!!");
    }
    else if (thuNhapChiuThue >= 0 && thuNhapChiuThue <= 60000000) {
        thueTNCN = tongTN * 5/100;
    } else if (thuNhapChiuThue > 6000000 && thuNhapChiuThue <= 120000000) {
        thueTNCN = tongTN * 10/100;
    } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
        thueTNCN = tongTN * 15/100;
    } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
        thueTNCN = tongTN * 20/100;
    } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
        thueTNCN = tongTN * 25/100;
    } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
        thueTNCN = tongTN * 30/100;
    } else {
        thueTNCN = tongTN * 35/100;
    }
    console.log(thueTNCN)
    document.getElementById("result").innerHTML = hoTen + "<br>Thuế thu nhập cá nhân là: " + thueTNCN.toLocaleString('vi-VN') + " VNĐ"

}

document.getElementById("btnSubmit").onclick = tinhThue;










