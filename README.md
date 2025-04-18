# Project2

Tên đề tài: **Xây dựng hệ thống quản lý nhà hàng cơm bình dân**

## Yêu cầu chức năng

Nhà hàng cần hệ thống phần mềm để quản lý khách hàng, nhân viên và giúp tạo ra các loại báo cáo và thống kê. Hệ thống có 3 loại người dùng chính là khách hàng, nhân viên và quản lý.

### Actor: Khách hàng

Khách hàng khi sử dụng phần mềm sẽ được xem các thông tin liên quan đến nhà hàng bao gồm thực đơn, tình trạng bàn ăn hiện tại, các thông báo đến với khách hàng. Ngoài ra, nhà hàng còn chia sẻ các bài viết liên quan đến các cách chế biến của các món ăn, giúp người dùng có thêm góc nhìn về nhà hàng.

Người dùng khi truy cập vào trang web của nhà hàng, màn hình sẽ hiển thị lên trang chủ của nhà hàng. Trang chủ này sẽ bao gồm các thông tin khái quát về nhà hàng bao gồm các bức ảnh về không gian, món ăn và khách hàng đã từng đến nhà hàng. Ngoài ra, trang chủ còn có các thông tin về các thông tin về địa chỉ, thông tin liên lạc của nhà hàng.

Khách hàng có thể chọn đăng nhập hoặc không. Nếu không đăng nhập, khách hàng chỉ có thể đặt bàn và liên lạc với quản lý qua số điện thoại và mạng xã hội. Nếu đăng nhập, khách hàng có thể xem thông tin về tình trạng bàn ăn hiện tại, đặt bàn trực tiếp trên web.

Ngoài ra, khách hàng có thể quản lý thông tin cá nhân, quản lý lịch sử đặt bàn và gọi món, theo dõi trạng thái đặt bàn, nhận những thông báo từ nhà hàng dành riêng cho khách hàng và feedback lại cho nhà hàng theo từng món ăn hoặc không.

Khách hàng khi đăng ký sẽ cần cung cấp những thông tin như email, họ và tên, ngày tháng năm sinh và mật khẩu. Khách hàng có thể đăng ký sử dụng google và facebook. Nhân viên đăng ký cho khách hàng sau khi thanh toán.

Khách hàng sau khi đăng ký có thể nhận các thông báo mới của các ưu đãi hay các thông báo chung của nhà hàng.  

Khách hàng khi đặt bàn cần cung cấp các thông tin như ngày giờ đến nhà hàng, số lượng người, các món ăn và thanh toán tiền cọc.

Khách hàng có lựa chọn thanh toán trước trên app sau khi đặt bàn và thanh toán sau. Thanh toán sau có lựa chọn thanh toán tiền mặt / chuyển khoản.

### Actor: Nhân viên

Mỗi nhân viên sẽ được quản lý cấp cho 1 địa chỉ email và password theo thông tin cá nhân của nhân viên. Nhân viên có thể đổi password và thông tin cá nhân. Nhân viên có thể xem qua web lịch làm việc, thông báo của quản lý tới nhân viên, tình trạng đặt bàn, tình trạng nguyên vật liệu và chăm sóc khách hàng.

Nhân viên mỗi thứ 7 và ngày chủ nhật sẽ phải đăng ký lịch làm việc trong tuần tiếp theo. Lịch làm việc của nhân viên không được trùng nhau. Nếu như số lượng nhân viên đã đăng ký hết mà các ca làm việc trong ngày của tuần tới chưa được lấp đầy, quản lý sẽ có quyền thêm nhân viên vào các ca trống đó. Nếu nhân viên muốn đổi ca, gửi yêu cầu đổi ca đến người đổi ca và cần có sự đồng ý của người đổi ca. Nếu nhân viên muốn xin nghỉ, gửi yêu cầu đến quản lý bao gồm ca xin nghỉ và lý do xin nghỉ và cần có sự cho phép của quản lý.

Nhân viên có thể quản lý tình trạng đặt bàn của nhà hàng. Mỗi khi có khách hàng yêu cầu đặt bàn, nhân viên sẽ xác nhận lại với khách hàng và xác nhận trên hệ thống. Thông tin xác nhận bao gồm thời gian khách hàng đến nhà hàng, số lượng người, số lượng bàn, tính chất sự kiện. Với khách không đăng nhập, cần yêu cầu thêm tên, số điện thoại.

Nhân viên có thể quản lý tình trạng nguyên vật liệu hiện tại của nhà hàng. Nguyên vật liệu tại nhà hàng sẽ được chuẩn bị vào mỗi sáng sớm, nhân viên nhập thông tin của nguyên vật liệu vào hệ thống bao gồm tên, loại, số lượng và giá. Sau khi nhập thông tin, hệ thống sẽ đánh giá xem món nào trong thực đơn không thể làm do thiếu nguyên vật liệu hay không. Hệ thống sẽ tự động thông báo cho quản lý.

Nhân viên mỗi khi khách hàng đặt món ăn sẽ điền thông tin các món ăn lên hệ thống bao gồm tên món ăn, số lượng. Hệ thống sẽ lưu thông tin của món ăn.

Nhân viên mỗi cuối ngày sẽ xem lại feedback của nhà hàng. Với các đánh giá tốt, hệ thống sẽ tự động gửi email cảm ơn đến họ. Với những đánh giá không tốt, hệ thống sẽ tự động gửi mail xin lỗi đến họ. Sau khi gửi email, nhân viên sẽ điền tóm tắt về feedback của khách hàng lên hệ thống. Hệ thống sẽ lưu lại các feedback đó.

### Actor: Quản lý

Quản lý khi truy cập vào trang web dành cho quản lý sẽ yêu cầu đăng nhập dựa trên tài khoản được tạo từ trước. Quản lý có các chức năng như quản lý nhân viên, quản lý nguyên vật liệu, quản lý món ăn, quản lý khách hàng, quản lý thông báo đến nhân viên và khách hàng, tạo báo cáo và thống kê định kỳ

Quản lý có thể quản lý nhân viên qua web. Cụ thể, quản lý sẽ có thể thêm nhân viên, xóa nhân viên, sửa thông tin nhân viên và tìm kiếm nhân viên theo tên và mã nhân viên. Quản lý sẽ xét duyệt các yêu cầu nghỉ làm của nhân viên và hệ thống sẽ gửi thông báo cho nhân viên sau khi quản lý xét duyệt. Quản lý có thể yêu cầu nhân viên làm vào giờ chưa được lấp đầy mỗi khi đăng ký lịch làm việc và hệ thống sẽ gửi thông báo đến cho nhân viên sạu khi yêu cầu.

Quản lý có thể quản lý món ăn của nhà hàng. Cụ thể, quản lý có thể thêm món ăn vào hệ thống bao gồm các thông tin như tên món ăn, loại món ăn, danh sách các nguyên vật liệu cần thiết, chi phí và doanh thu cho mỗi món ăn.

Quản lý có thể quản lý nguyên vật liệu của nhà hàng. Cụ thể, quản lý có thể thêm các nguyên vật liệu cần thiết cho món ăn như tên, số lượng, loại, giá, sửa thông tin các nguyên vật liệu, xóa nguyên vật liệu và tìm kiếm các nguyên vật liệu.

Quản lý có thể quản lý khách hàng. Cụ thể, quản lý có thể tìm kiếm khách hàng.

Quản lý có thể quản lý thông báo tới khách hàng và nhân viên. Cụ thể, quản lý có thể gửi các thông báo đến các đối tượng cụ thể, xóa các thông báo trong hệ thống và tìm kiếm các thông báo dựa trên tên, loại và ngày thông báo.

Quản lý có thể lấy các báo cáo và thống kê dữ liệu. Cụ thể, quản lý có thể xuất các báo cáo về giao dịch, lịch làm việc, đặt bàn, nguyên vật liệu, feedback của khách hàng, món ăn, doanh thu và doanh số theo từng món ăn và chi phí của các nguyên vật liệu dựa trên món ăn. Có thể lấy dữ liệu theo ngày, tuần, tháng và năm.
