/**
 * IPO
 * 
 * Input: sokW
 * 
 * Process:
 * + Lấy giá trị số kW
 * + Xét điều kiện: 
 *      0->50 kW: 500d
 *      51->100 kW: 650d
 *      101->200 kW: 850d
 *      201->350 kW: 1100d
 *      >350 kW: 1300d
 * + Tính tiền
 * + Hiện kết quả
 * 
 * Output: số tiền phải trả
 * 
 */

let sokW = 0
let tongTien = 0

function tinhTienDien () {
    sokW = document.getElementById("inputkW").value
    console.log(sokW)

    if (sokW < 0 || isNaN(sokW)) {
        alert("Vui lòng nhập số Kw hợp lệ!");
        return;
    }

    else if (sokW >= 0 && sokW <= 50 ) {
        tongTien = 500 * sokW;
    } else if (sokW > 50 && sokW <= 100) {
        tongTien = (sokW - 50) * 650 + 50 * sokW; 
    } else if (sokW > 100 && sokW <= 200) {
        tongTien = 50 * 500 + 50 * 650 + (sokW - 100) * 850; 
    } else if (sokW > 200 && sokW <= 350) {
        tongTien = (sokW - 200) * 1100 + 50 * 500 + 50 * 650 + 100 * 850; 
    } else{
        tongTien = (sokW -350) * 1300 + 150 * 1100 + 50 * 500 + 50 * 650 + 100 * 850; 
    }
    console.log(tongTien)

    document.getElementById("result").innerHTML = "Tổng tiền phải trả là: " + tongTien.toLocaleString('vi-VN') + " VNĐ"
}

document.getElementById("btnSubmit").onclick = tinhTienDien;




    





