/**
 * IPO
 * 
 * Input: diemChuan, diemMon1, diemMon2, diemMon3, diemKhuVuc, diemDoiTuong
 * 
 * Process:
 * +B1: Lấy giá trị từ form
 * +B2: Tính tổng điểm 
 *      diem1 + diem2 + diem3 + diemKhuVuc + diemDoiTuong
 * +B3: Xét tuyển
 *      Nếu tổng điểm >= điểm chuẩn và (diem1, diem2, diem3 >0) => Đậu
 *      Ngược lại: rớt
 * +B4: Hiển thị kết quả 
 * 
 * Output: đậu hay rớt, hiện tổng điểm
 * 
 */

const tinhTongDiem = (diem1, diem2, diem3, diemKhuVuc, diemDoiTuong) => {
    let tongDiem = diem1 + diem2 + diem3 + diemKhuVuc + diemDoiTuong;
    return tongDiem; // Trả về tổng điểm
}


const xetTuyen = () => {
    let diemChuan = Number(document.getElementById("inputDiemChuan").value);
    let diem1 = Number(document.getElementById("inputDiem1").value);
    let diem2 = Number(document.getElementById("inputDiem2").value);
    let diem3 = Number(document.getElementById("inputDiem3").value);
    let diemKhuVuc = Number(document.getElementById("selectKhuVuc").value);
    let diemDoiTuong = Number(document.getElementById("selectDoiTuong").value);
    console.log(diem1, diem2, diem3, diemKhuVuc, diemDoiTuong,diemChuan)

    // Gọi hàm tinhTongDiem() để lấy tổng điểm
    let tongDiem = tinhTongDiem(diem1, diem2, diem3, diemKhuVuc, diemDoiTuong);

    let ketQua = document.getElementById("ketQua");
    // Tích lũy giá trị muốn thêm vào
    ketQua.innerHTML += `
    Điểm chuẩn: ${diemChuan} <br>
    Điểm môn 1: ${diem1} <br>
    Điểm môn 2: ${diem2} <br>
    Điểm môn 3: ${diem3} <br>
    Điểm khu vực: ${diemKhuVuc} <br>
    Điểm đối tượng: ${diemDoiTuong} <br>
    `
    // Kiểm tra điều kiện đậu/rớt
    if (tongDiem >= diemChuan && diem1 > 0 && diem2 > 0 && diem3 > 0) {
        ketQua.innerHTML += `Bạn đã đậu! Tổng điểm: ${tongDiem}`;
        ketQua.style.color = "green";
    } else {
        ketQua.innerHTML += `Bạn đã rớt. Tổng điểm: ${tongDiem}`;
        ketQua.style.color = "red";
    }
}


document.getElementById("btnSubmit1").onclick = xetTuyen;