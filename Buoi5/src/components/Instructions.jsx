import "./Instructions.css";

export default function Instructions() {
  return (
    <div id="Instructions">
      ✎ tạo task mới
      <br />
      ▼ xem chi tiết
      <br />
      🗑️ xóa category
      <br />
      ❗thay đổi status chỉ việc bấm vào task
      <br />
      🔴: Pending
      <br />
      🟡: In-Progress
      <br />
      🟢: Completed
      <br />
      💾 autosave mỗi lần tạo,xóa category hoặc task,thay đổi trạng thái
    </div>
  );
}
