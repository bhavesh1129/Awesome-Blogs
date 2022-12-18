import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Awesome</span>
        <span className="headerTitleLg">Blogs<i class="fa-solid fa-pen-fancy"></i></span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/4652070/pexels-photo-4652070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
    </div>
  );
}
