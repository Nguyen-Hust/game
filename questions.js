// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question:
      "UNESCO ra Nghị quyết 24C/18.65 tôn vinh Chủ tịch Hồ Chí Minh là Anh hùng giải phóng dân tộc và danh nhân văn hóa kiệt xuất vào năm:",
    answer: "Năm 1987",
    options: ["Năm 1969", "Năm 1975", "Năm 1987", "Năm 1990"],
  },
  {
    numb: 2,
    question: "Một trong những nguồn gốc của tư tưởng Hồ Chí Minh là tiếp thu:",
    answer: "Giá trị truyền thống dân tộc",
    options: [
      "Lòng nhân ái, đức hy sinh của Hồi giáo.",
      "Các giá trị văn hóa tiến bộ của thời kỳ Phục hưng",
      "Giá trị truyền thống dân tộc",
      "Văn hóa Phục hưng",
    ],
  },
  {
    numb: 3,
    question:
      '"Dân tộc ta, nhân dân ta, non sông đất nước ta đã sinh ra Hồ Chủ tịch, Người anh hùng dân tộc vĩ đại, và chính Người đã làm rạng rỡ dân tộc ta, nhân dân ta và non sông đất nước ta". Đó là khẳng định của:',
    answer: "Ban Chấp hành Trung ương Đảng Lao động Việt Nam",
    options: [
      "Đồng chí Võ Nguyên Giáp",
      "Đồng chí Trường Chinh",
      "Đồng chí Phạm Văn Đồng",
      "Ban Chấp hành Trung ương Đảng Lao động Việt Nam",
    ],
  },
  {
    numb: 4,
    question:
      "“Trong lúc này, thời cơ thuận lợi đã tới. Dù hy sinh tới đâu, dù phải đốt cháy cả dãy Trường Sơn cũng phải kiên quyết giành cho được độc lập”. Hồ Chí Minh đã chỉ thị điều đó cho ai?",
    answer: "Võ Nguyên Giáp",
    options: ["Võ Nguyên Giáp", "Trường Chinh", "Phạm Văn Đồng", "Vũ Kỳ"],
  },
  {
    numb: 5,
    question:
      'Trong Tuyên ngôn độc lập, Hồ Chí Minh đã khẳng định quyết tâm của nhân dân ta: "Toàn thể dân tộc Việt Nam quyết đem (.....) để giữ vững quyền tự do, độc lập ấy". Điền từ vào chỗ trống:',
    answer: "Tất cả tinh thần và lực lượng, tính mạng và của cải",
    options: [
      "Toàn bộ sức lực",
      "Tất cả tinh thần và lực lượng",
      "Tính mạng và của cải",
      "Tất cả tinh thần và lực lượng, tính mạng và của cải",
    ],
  },
  {
    numb: 6,
    question:
      "Giai đoạn hình thành tư tưởng yêu nước và chí hướng cứu nước của Chủ tịch Hồ Chí Minh được tính từ:",
    answer: "1890 - 1911",
    options: ["1890 - 1911", "1911 - 1920", "1921 - 1930", "1930 - 1941"],
  },
  {
    numb: 7,
    question:
      "Giai đoạn vượt qua thử thách, kiên trì giữ vững lập trường cách mạng của Chủ tịch Hồ Chí Minh được tính từ:",
    answer: "1930 - 1941",
    options: ["1911 - 1920", "1921 - 1930", "1930 - 1941", "1941 - 1969"],
  },
  {
    numb: 8,
    question:
      "Giai đoạn tư tưởng Hồ Chí Minh tiếp tục phát triển hoàn thiện được tính từ:",
    answer: "1941 - 1969",
    options: ["1911 - 1920", "1921 - 1930", "1930 - 1941", "1941 - 1969"],
  },
  {
    numb: 9,
    question: "Nguồn gốc quyết định bản chất tư tưởng Hồ Chí Minh là:",
    answer: "Chủ nghĩa Mác - Lênin",
    options: [
      "Giá trị truyền thống dân tộc",
      "Chủ nghĩa Mác - Lênin",
      "Tinh hoa văn hóa nhân loại",
      "Phẩm chất cá nhân Hồ Chí Minh",
    ],
  },
  {
    numb: 10,
    question: "Năm 1925, Hồ Chí Minh đã cải tổ Tâm Tâm xã thành tổ chức nào?",
    answer: "Hội Việt Nam Cách mạng thanh niên",
    options: [
      "Hội Việt Nam Cách mạng thanh niên",
      "Đảng Phục Việt",
      "Đảng Hưng Nam",
      "Việt Nam Quốc dân Đảng",
    ],
  },
  {
    numb: 11,
    question:
      "Một trong những nội dung cơ bản trong bản Yêu sách gồm tám điểm của Nguyễn Ái Quốc gửi đến Hội nghị Vecxây (Pháp) là: ",
    answer: "Đòi quyền tự do dân chủ tối thiểu cho nhân dân An Nam.",
    options: [
      "Đòi quyền tự do dân chủ tối thiểu cho nhân dân An Nam.",
      "Đòi quyền độc lập dân tộc.",
      "Đòi quyền tự trị của dân tộc",
      "Cả 3 ý đều sai",
    ],
  },
  {
    numb: 12,
    question: "Lãnh tụ Nguyễn Ái Quốc đi tìm đường cứu nước khi nào?",
    answer: "Ngày 5/6/1911",
    options: [
      "Ngày 5/6/1910",
      "Ngày 6/5/1911",
      "Ngày 5/6/1911",
      "Ngày 19/5/1911",
    ],
  },
  {
    numb: 13,
    question:
      "Khi xuống con tàu Latusơ Tơrêvin đi tìm đường cứu nước, Bác Hồ lấy tên gọi là",
    answer: "Văn Ba",
    options: [
      "Nguyễn Sinh Cung",
      "Nguyễn Tất Thành",
      "Nguyễn Ái Quốc",
      "Văn Ba",
    ],
  },
  {
    numb: 14,
    question:
      "Nguyễn Ái Quốc tìm thấy con đường giải phóng dân tộc theo khuynh hướng chính trị vô sản vào thời gian nào? Ở đâu? ",
    answer: "7/1920 - Pháp",
    options: [
      "6/1919 - Pháp",
      "12/1920 - Pháp",
      "7/1920 - Liên Xô",
      "7/1920 - Pháp",
    ],
  },
  {
    numb: 15,
    question:
      "Nguyễn Ái Quốc đọc Sơ thảo lần thứ nhất Luận cương về những vấn đề dân tộc và vấn đề thuộc địa của Lênin khi nào? Ở đâu? ",
    answer: "7/1920 - Pháp",
    options: [
      "7/1920 - Liên Xô",
      "7/1920 - Pháp",
      "7/1920 - Trung Quốc",
      "7/1920 - Anh",
    ],
  },
  {
    numb: 16,
    question:
      'Khi giải thích về con đường đến với chủ nghĩa Lênin, Chủ tịch Hồ Chí Minh viết:"Lúc đầu, chính là (....), chứ chưa phải chủ nghĩa cộng sản đã đưa tôi tin theoLênin, tin theo Quốc tế thứ ba". Hãy điền vào chỗ còn thiếu:',
    answer: "Chủ nghĩa yêu nước",
    options: [
      "Chủ nghĩa Mác",
      "Lòng yêu nước",
      "Chủ nghĩa dân tộc",
      "Chủ nghĩa yêu nước",
    ],
  },
  {
    numb: 17,
    question:
      "Lãnh tụ Nguyễn Ái Quốc sau 30 năm tìm đường cứu nước đã trở về Tổ quốc vào ngày:",
    answer: "28/1/1941",
    options: ["28/1/1941", "8/2/1943", "28/1/1942", "8/2/1944"],
  },
  {
    numb: 18,
    question:
      "Hoàn thành luận điểm nổi tiếng của Hồ Chí Minh: “Nếu nước được ….. mà dân không hưởng hạnh phúc tự do, thì …… cũng chẳng có nghĩa lý gì”:",
    answer: "Độc lập",
    options: ["Độc lập", "Tự do", "Giải phóng", "Hòa bình"],
  },
  {
    numb: 19,
    question: "Theo Hồ Chí Minh, độc lập, tự do là:",
    answer: "Quyền thiêng liêng, bất khả xâm phạm của tất cả các dân tộc.",
    options: [
      "Tạo hóa ban cho con người.",
      "Trách nhiệm của các nước lớn phải bảo đảm cho các nước nhỏ.",
      "Mong muốn của các dân tộc",
      "Quyền thiêng liêng, bất khả xâm phạm của tất cả các dân tộc.",
    ],
  },
  {
    numb: 20,
    question: "Chủ tịch Hồ Chí Minh đã từng dạy học ở ngôi trường nào?",
    answer: "Trường Dục Thanh (Phan Thiết)",
    options: [
      "Trường Tiểu học Vinh",
      "Trường Pháp Việt Đông Ba (Huế)",
      "Trường Quốc học Huế",
      "Trường Dục Thanh (Phan Thiết)",
    ],
  },
];
