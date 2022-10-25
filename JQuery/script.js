// - Tạo một trang HTML hiển thị danh sách các user (id, fullname, address)
// - Có text hiển thị số lượng các user ( mặc định là 0 )
// - Một bảng hiển thị các user ( mặc định hiển thị không có user)
// - Có một button “Lấy danh sách” và một button “Clear”
// - Khi ấn vào button “Lấy danh sách” sẽ thực hiện gọi ajax api đổ danh sách user ra bảng và đếm số user vào text số lượng user.
// -Khi ấn vào button “Clear”  sẽ xoá các user trong bảng và clear bộ đếm.
$(() => {
	// JSON, $getJSON
	const userApi =
		"https://635789052712d01e14098ecf.mockapi.io/api/users/users";

	$.getJSON(userApi)
		.done((data) => {
			console.log(data);

			const btnGet = $("#btn__get");
			const btnClear = $("#btn__clear");
			const userList = $("#user-list");

			btnGet.click(() => {
				userList.empty();
				$.each(data, (index, user) => {
					$("#amount").text(data.length);
					// Hiển thị danh sách user
					userList.append(`
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.firstName} ${user.lastName}</td>
                        <td>${user.Address}</td>
                    </tr>
                `);
				});
			});

			btnClear.click(() => {
				userList.empty();
				$("#amount").text(0);
			});
		})
		.fail(() => {
			console.log("Error");
		})
		.always(() => {
			console.log("Complete");
		});
});
