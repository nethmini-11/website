import React, { useEffect, useState } from "react";
import Card from "../components/about/AboutCard";
import Banner from "../assets/images/about-banner.png";
import { aboutCardsData } from "../data/about";
import { productData } from "../data/products";
import { testimonialData } from "../data/testimonials";
import ProductImage1 from "../assets/images/bicycle-high-quality.jpg";
import ProductDemo from "../assets/images/product-demo.mp4";
import ProductImage2 from "../assets/images/product-large.jpg";
import ProductCard from "../components/products/ProductCard";
import Testimonial from "../components/testimonial/Testimonial";
import { Link } from "react-router-dom";

const Home = () => {
  const [aboutCards, setAboutCards] = useState([]);
  const [products, setProducts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [rotation, setRotation] = useState(0);
  const autoRotationSpeed = 1;

  useEffect(() => {
    const rotateAutomatically = () => {
      setRotation((prevRotation) => prevRotation + autoRotationSpeed);
    };

    const interval = setInterval(rotateAutomatically, 20);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const totalSlides = testimonials.length;

    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const slideInterval = setInterval(nextSlide, 5000);

    return () => clearInterval(slideInterval);
  }, [testimonials]);

  useEffect(() => {
    setTestimonials(testimonialData);
  }, []);

  useEffect(() => {
    setProducts(productData);
  }, []);

  useEffect(() => {
    setAboutCards(aboutCardsData);
  }, []);

  return (
    <div>
      <section id="about" className="section about">
        <div className="container">
          <h2 className="h2 section-title">About Us</h2>
          <span className="span section-text">
            At JourneyBikes, we are committed to revolutionizing the cycling
            experience by delivering high-performance, stylish, and sustainable
            bicycles. Our dedication to innovation and customer satisfaction
            drives us to create products that seamlessly blend form, function,
            and eco-conscious design.
          </span>

          <ul className="about-list">
            <div>
              {aboutCards.slice(0, 2).map((card, index) => (
                <Card
                  key={index}
                  name={card.iconName}
                  title={card.title}
                  text={card.text}
                />
              ))}
            </div>

            <li className="about-item">
              <figure className="about-banner img-holder">
                <img
                  src={Banner}
                  alt="about-banner"
                  className="img-cover rotatable-image"
                  style={{ transform: `rotateY(${rotation}deg)` }}
                />
              </figure>
            </li>

            <div>
              {aboutCards.slice(2).map((card, index) => (
                <Card
                  key={index}
                  name={card.iconName}
                  title={card.title}
                  text={card.text}
                  rightAligned={card.rightAligned}
                />
              ))}
            </div>
          </ul>
        </div>
      </section>

      <section id="product" className="section product-showcase">
        <div className="container">
          <h2 className="h2 section-title">Explore Our Premium Bicycle</h2>
          <span className="span section-text">
            Discover the unmatched quality and performance of our bicycles
            through interactive elements, detailed views, and high-quality
            media.
          </span>

          <div className="showcase-content">
            <figure className="showcase-banner img-holder">
              <img
                src={ProductImage1}
                alt="Premium Bicycle Image"
                className=" w-full h-[500px] object-cover"
              />
            </figure>

            <div className="showcase-video">
              <video
                controls
                autoPlay
                muted
                loop
                className="w-full h-[500px] object-cover"
              >
                <source src={ProductDemo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="interactive-section">
              <img
                src={ProductImage2}
                alt="360-degree bicycle view"
                className="image-360 w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="call" className="section call-to-action">
        <div className="container">
          <h2 className="h2 section-title">Discover Your Perfect Ride</h2>
          <span className="span section-text">
            Whether you are commuting through the city or conquering rugged
            trails, we have the perfect bike for every adventure. Experience the
            best of cycling with JourneyBikes.
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                speed={product.speed}
                price={product.price}
                features={product.features}
                buttonText={product.buttonText}
              />
            ))}
          </div>
          <div className="cta-wrapper">
            <p className="cta-text">
              Ready to take the next step? Explore our range of bicycles and
              find the perfect ride for your journey.
            </p>
            <Link to={"/products"}>
              <button className="btn btn-large btn-primary">
                Shop All Bicycles
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section id="testimonials" className="section testimonials">
        <div className="container">
          <h2 className="h2 section-title">What Our Customers Say</h2>
          <span className="span section-text">
            Hear from our satisfied customers who love our premium bicycles.
          </span>

          <div className="testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                image={testimonial.image}
                text={testimonial.text}
                author={testimonial.author}
                isActive={index === currentSlide}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 bg-gray-100">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-12">
            <div className="contact-info w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
              <p className="mt-4 text-lg text-gray-600">
                If you have any questions or inquiries, feel free to reach out
                to us. We are here to help!
              </p>
              <ul className="mt-4 space-y-2 text-lg text-gray-700">
                <li>
                  <strong>Phone:</strong> +1 123-456-7890
                </li>
                <li>
                  <strong>Email:</strong> info@journeybikes.com
                </li>
                <li>
                  <strong>Address:</strong> 123 Bicycle Street, City, Country
                </li>
              </ul>
            </div>

            <div className="contact-form w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800">
                Send Us a Message
              </h2>
              <form className="mt-6 space-y-4">
                <div className="form-group">
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-2 btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
