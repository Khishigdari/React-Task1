// import Image from "next/image";

import { Card, Navbar } from "@/components";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <Navbar></Navbar>
      <hero>
        <div className="w-full h-[180px] p-10 text-center bg-gray-50">
          <h3 className="font-bold text-3xl mb-5">Welcome to Simple Blog</h3>
          <p className="">
            Discover insightful articles about web development, programming, and
            technology. Clean design meets quality content.
          </p>
        </div>
      </hero>
      <section>
        <h3 className="text-center font-semibold text-1xl mt-10">
          Latest Posts
        </h3>
        <div className="flex gap-10 p-10 flex-wrap justify-center">
          <Card
            img="https://miro.medium.com/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg"
            p="January 15, 2025"
            h3="Getting Started with Modern Web Development"
            span="Learn the fundamentals of modern web development including React,
        Next.js, and TypeScript. This comprehensive guide will help you build
        your first..."
          ></Card>
          <Card
            img="https://blog.zegocloud.com/wp-content/uploads/2024/03/types-of-web-development-services.jpg"
            p="January 12, 2025"
            h3="The Art of Clean Code"
            span="Discover best practices for writing maintainable, readable code that your future self and teammates will thank you for.
Clean code is not just about syntax."
          ></Card>
          <Card
            img="https://xultechng.com/home/image/solutions/web-development.jpg"
            p="January 10, 2025"
            h3="Building Responsive Designs"
            span="Master the techniques for creating websites that look great on all devices. From mobile-first design to advanced CSS
Grid layouts."
          ></Card>
          <Card
            img="https://images.prismic.io//intuzwebsite/4b74ec65-7ee2-4134-a612-6d96a6bd9278_Web+Development.png?w=1200&q=75&auto=format,compress&fm=png8"
            p="January 15, 2025"
            h3="Getting Started with Modern Web Development"
            span="Learn the fundamentals of modern web development including React,
        Next.js, and TypeScript. This comprehensive guide will help you build
        your first..."
          ></Card>
          <Card
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe2GwSnBHMJToBd-eLWfuybICaj0AA5_Jcig&s"
            p="January 12, 2025"
            h3="The Art of Clean Code"
            span="Discover best practices for writing maintainable, readable code that your future self and teammates will thank you for.
Clean code is not just about syntax."
          ></Card>
          <Card
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV--5QlI17JIxa8XsbkwO0_-UJ-gZjYbO9bA&s"
            p="January 10, 2025"
            h3="Building Responsive Designs"
            span="Master the techniques for creating websites that look great on all devices. From mobile-first design to advanced CSS
Grid layouts."
          ></Card>
          <Card
            img="https://xultechng.com/home/image/solutions/web-development.jpg"
            p="January 10, 2025"
            h3="Building Responsive Designs"
            span="Master the techniques for creating websites that look great on all devices. From mobile-first design to advanced CSS
Grid layouts."
          ></Card>
          <Card
            img="https://images.prismic.io//intuzwebsite/4b74ec65-7ee2-4134-a612-6d96a6bd9278_Web+Development.png?w=1200&q=75&auto=format,compress&fm=png8"
            p="January 15, 2025"
            h3="Getting Started with Modern Web Development"
            span="Learn the fundamentals of modern web development including React,
        Next.js, and TypeScript. This comprehensive guide will help you build
        your first..."
          ></Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
