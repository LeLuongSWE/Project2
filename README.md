# Project2

Tên đề tài: **Xây dựng hệ thống quản lý nhà hàng cơm bình dân**

## Yêu cầu chức năng

Nhà hàng cần hệ thống phần mềm để quản lý khách hàng, nhân viên và giúp tạo ra các loại báo cáo và thống kê. Hệ thống có 3 loại người dùng chính là khách hàng, nhân viên và quản lý.

### Actor: Khách hàng

Khách hàng khi sử dụng phần mềm sẽ được xem các thông tin liên quan đến nhà hàng bao gồm thực đơn, tình trạng bàn ăn hiện tại, các thông báo đến với khách hàng. Ngoài ra, nhà hàng còn chia sẻ các bài viết liên quan đến các cách chế biến của các món ăn, giúp người dùng có thêm góc nhìn về nhà hàng.

Người dùng khi truy cập vào trang web của nhà hàng, màn hình sẽ hiển thị lên trang chủ của nhà hàng. Trang chủ này sẽ bao gồm các thông tin khái quát về nhà hàng bao gồm các bức ảnh về không gian, món ăn và khách hàng đã từng đến nhà hàng. Ngoài ra, trang chủ còn có các thông tin về các sự kiện của nhà hàng trong thời gian tới giúp khách hàng có thể theo dõi nhà hàng, các thông tin về địa chỉ, thông tin liên lạc của nhà hàng.

Khách hàng có thể chọn đăng nhập hoặc không. Nếu không đăng nhập, khách hàng chỉ có thể đặt bàn và liên lạc với quản lý qua số điện thoại và mạng xã hội. Nếu đăng nhập, khách hàng có thể xem thông tin về tình trạng bàn ăn hiện tại, đặt bàn trực tiếp trên web và tham gia vào sự kiện do nhà hàng tổ chức. Ngoài ra, khách hàng có thể quản lý thông tin cá nhân, quản lý lịch sử đặt bàn và gọi món, theo dõi trạng thái đặt bàn, nhận những thông báo từ nhà hàng dành riêng cho khách hàng và feedback lại cho nhà hàng theo từng món ăn hoặc không.

Khách hàng khi đăng ký sẽ cần cung cấp những thông tin như email, họ và tên, ngày tháng năm sinh và mật khẩu. Khách hàng có thể đăng ký sử dụng google và facebook.

Khách hàng khi đặt bàn cần cung cấp các thông tin như ngày giờ đến nhà hàng, số lượng người, số lượng bàn, tính chất của sự kiện.

Khách hàng chỉ được phép đặt lịch sự kiện khi đã đăng nhập. Khi đăng ký sự kiện, khách hàng sẽ được yêu cầu thanh toán tiền cọc trước. Sau khi thanh toán tiền cọc thì sẽ được xác nhận thành công.

### Actor: Nhân viên

Mỗi nhân viên sẽ được quản lý cấp cho 1 địa chỉ email và password theo thông tin cá nhân của nhân viên. Nhân viên có thể đổi password và thông tin cá nhân. Nhân viên có thể xem qua web lịch làm việc, thông báo của quản lý tới nhân viên, tình trạng đặt bàn, tình trạng nguyên vật liệu và chăm sóc khách hàng.

Nhân viên mỗi thứ 7 và ngày chủ nhật sẽ phải đăng ký lịch làm việc trong tuần tiếp theo. Lịch làm việc của nhân viên không được trùng nhau. Nếu như số lượng nhân viên đã đăng ký hết mà các ca làm việc trong ngày của tuần tới chưa được lấp đầy, quản lý sẽ có quyền thêm nhân viên vào các ca trống đó. Nếu nhân viên muốn đổi ca, gửi yêu cầu đổi ca đến người đổi ca và cần có sự đồng ý của người đổi ca. Nếu nhân viên muốn xin nghỉ, gửi yêu cầu đến quản lý bao gồm ca xin nghỉ và lý do xin nghỉ và cần có sự cho phép của quản lý.

Nhân viên có thể quản lý tình trạng đặt bàn của nhà hàng. Mỗi khi có khách hàng yêu cầu đặt bàn, nhân viên sẽ xác nhận lại với khách hàng và xác nhận trên hệ thống. Thông tin xác nhận bao gồm thời gian khách hàng đến nhà hàng, số lượng người, số lượng bàn, tính chất sự kiện, tên, email và số điện thoại.Thông 
