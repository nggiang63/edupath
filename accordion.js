function toggleSection(sectionId) {
    const chapterList = document.getElementById(sectionId);
    
    // Kiểm tra nếu danh sách chương đang bị ẩn
    if (chapterList.style.display === 'none' || chapterList.style.display === '') {
        chapterList.style.display = 'block';  // Hiển thị danh sách chương
    } else {
        chapterList.style.display = 'none';   // Ẩn danh sách chương
    }
}

function toggleChapter(chapterId, event) {
    event.stopPropagation();  // Ngăn chặn sự kiện click lan truyền lên phần chứa
    const lessonList = document.getElementById(chapterId);
    
    // Kiểm tra nếu danh sách bài học đang bị ẩn
    if (lessonList.style.display === 'none' || lessonList.style.display === '') {
        lessonList.style.display = 'block';  // Hiển thị danh sách bài học
    } else {
        lessonList.style.display = 'none';   // Ẩn danh sách bài học
    }
}
