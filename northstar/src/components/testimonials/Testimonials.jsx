import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Ashish Vyas",
      title: "Tech Expert",
      img :"assets/ashish.png?auto=compress&cs=tinysrgb&dpr=2&w=500" ,
      icon: "assets/twitter.png",
      desc:
        "A fantastic organization with great customer support throughout the process. The team is really informed and goes the extra mile at every stage. I would recommend them unreservedly.",
    },
    {
      id: 2,
      name: "Mohit Joshi",
      title: "Data Manager",
      img :"assets/mohit.png?auto=compress&cs=tinysrgb&dpr=2&w=500" ,
      icon: "assets/youtube.png",
      desc:
        "To deal with this finance institute is profitable so I would suggest and recommend to everyone to start their financial journey with them...",
      featured: true,
    },
    {
      id: 3,
      name: "Gaurav Ji",
      title: "Manager",
      img:
        "assets/gauravJi.png?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Garvit bhai and his team has been instrumental in providing investment advisory and also financial education to their clients. I take this opportunity to thank him for his service and wish for them to continue the commendable work. Cheers.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
