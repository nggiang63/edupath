function searchCourse() {
    // Lấy giá trị người dùng nhập vào từ ô tìm kiếm
    const query = document.getElementById('search-input').value.toLowerCase();
    
    // Danh sách các môn học và URL tương ứng
    const courses = {
        'toán học': 'courses.html#toan-hoc',
        'toán': 'courses.html#toan-hoc',
        'ngữ văn': 'courses.html#ngu-van',
        'văn': 'courses.html#ngu-van',
        'tiếng anh': 'courses.html#tieng-anh',
        'anh': 'courses.html#tieng-anh',
        'vật lý': 'courses.html#vat-ly',
        'lý': 'courses.html#vat-ly',
        'hóa học': 'courses.html#hoa-hoc',
        'hóa': 'courses.html#hoa-hoc',
        'sinh học': 'courses.html#sinh-hoc',
        'sinh': 'courses.html#sinh-hoc',
        'lịch sử': 'courses.html#lich-su',
        'sử': 'courses.html#lich-su',
        'địa lý': 'courses.html#dia-ly',
        'địa': 'courses.html#dia-ly',
        'gdcd': 'courses.html#gdcd'
    };

    // Kiểm tra nếu từ khóa nhập vào khớp với môn học nào đó
    if (courses[query]) {
        // Chuyển hướng đến trang môn học tương ứng
        window.location.href = courses[query];
    }
}
