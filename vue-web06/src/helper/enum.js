const MEnum = {
    FORM_MODE: {
        ADD: 0, // Create new Employee
        UPDATE: 1, // Update Employee
        VIEW: 2
    },
    GENDER: {
        MALE: 0, // Nam
        FEMALE: 1,// Nu
        OTHER: 2 // Other
    },
    PopupType: { // Loại thông báo
        Error: 1,   // Lỗi
        Question: 2, // Hỏi xác nhận
        Warning: 3,  // Cảnh báo
    },
    DropDownType: { // Loại Dropdown
        NoEdit: 0, // Không chỉnh sửa
        Edit: 1    // Cho chỉnh sửa
    }
}

export default MEnum