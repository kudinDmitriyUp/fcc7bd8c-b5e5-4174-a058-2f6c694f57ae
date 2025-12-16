"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardFive from '@/components/sections/product/ProductCardFive';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="medium"
      background="grid"
      cardStyle="solid-accent"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "featured" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Sababa Tel Aviv"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Authentic Israeli Cuisine in the Heart of Tel Aviv"
          description="Experience the rich flavors of Mediterranean tradition. From classic hummus and falafel to grilled Mediterranean specialties, discover why Sababa is Tel Aviv's favorite gathering place."
          tag="Est. 2015"
          buttons={[
            { text: "Reserve a Table", href: "contact" },
            { text: "View Menu", href: "featured" }
          ]}
          carouselItems={[
            { id: "1", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765873807053-y2a1svr1.jpg", imageAlt: "Israeli hummus with olive oil" },
            { id: "2", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765873808080-t1qccy5g.jpg", imageAlt: "Fresh falafel and salad" },
            { id: "3", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765873808943-e6edt2td.jpg", imageAlt: "Grilled Mediterranean fish" },
            { id: "4", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765873809553-8d2xjvtn.jpg", imageAlt: "Traditional Israeli breakfast" },
            { id: "5", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765873810361-z0x1t6bf.jpg", imageAlt: "Grilled Mediterranean kebab" },
            { id: "6", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765873811176-2pirmie4.jpg", imageAlt: "Fresh Israeli salad" }
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
        />
      </div>
      
      <div id="about" data-section="about">
        <TextAbout
          title="At Sababa, we celebrate the soul of Israeli cuisine. For nearly a decade, we've been serving authentic Mediterranean flavors prepared with the freshest ingredients and time-honored traditions, creating unforgettable dining moments that bring people together."
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="featured" data-section="featured">
        <ProductCardFive
          title="Signature Dishes"
          description="Taste the flavors that keep guests coming back. Each dish is carefully prepared with premium ingredients and authentic Mediterranean techniques."
          products={[
            {
              id: "1",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765873813128-8a64kdpq.jpg",
              imageAlt: "Sababa's famous hummus",
              button: { text: "Order Now", href: "contact" },
              isFavorited: false
            },
            {
              id: "2",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765873813760-bfy61qa5.jpg",
              imageAlt: "Crispy golden falafel",
              button: { text: "Order Now", href: "contact" },
              isFavorited: false
            },
            {
              id: "3",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765873814546-sqm7pozp.jpg",
              imageAlt: "Traditional shakshuka",
              button: { text: "Order Now", href: "contact" },
              isFavorited: false
            },
            {
              id: "4",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765873815146-7996zzg0.jpg",
              imageAlt: "Grilled Mediterranean kebab",
              button: { text: "Order Now", href: "contact" },
              isFavorited: false
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Discover why locals and visitors trust Sababa for authentic Mediterranean dining"
          testimonials={[
            {
              id: "1",
              name: "Sarah Cohen",
              role: "Local since 2018",
              testimonial: "The best hummus I've had outside my grandmother's kitchen. Every visit to Sababa feels like coming home.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765873815913-pxmnpi1a.jpg",
              imageAlt: "Sarah Cohen"
            },
            {
              id: "2",
              name: "David Mizrahi",
              role: "Food enthusiast",
              testimonial: "Authentic flavors, warm service, and an atmosphere that celebrates Israeli culture. Simply unforgettable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765873816749-2rbze7wq.jpg",
              imageAlt: "David Mizrahi"
            },
            {
              id: "3",
              name: "Rachel Goldman",
              role: "Regular guest",
              testimonial: "Sababa is where I bring my family every Friday. The food is incredible and the hospitality is second to none.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765873818099-65c7ry2z.jpg",
              imageAlt: "Rachel Goldman"
            },
            {
              id: "4",
              name: "Michael Levi",
              role: "Business owner",
              testimonial: "Took my visiting parents here and they keep asking when they can go back. That says everything.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765873819049-8vbuvcna.jpg",
              imageAlt: "Michael Levi"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about visiting Sababa"
          faqs={[
            {
              id: "1",
              title: "What are your opening hours?",
              content: "We are open daily from 11:00 AM to 11:00 PM. Fridays and Saturdays we stay open until midnight to accommodate our weekend guests."
            },
            {
              id: "2",
              title: "Do you take reservations?",
              content: "Yes! We highly recommend reservations, especially for weekends. You can reserve a table through our contact form or call us directly."
            },
            {
              id: "3",
              title: "Do you accommodate dietary restrictions?",
              content: "Absolutely. We offer vegetarian, vegan, and gluten-free options. Please mention any dietary requirements when reserving or ordering."
            },
            {
              id: "4",
              title: "Is there parking available?",
              content: "Yes, we have dedicated parking for our guests. There's also street parking available in the surrounding area."
            },
            {
              id: "5",
              title: "Can I host a private event?",
              content: "We would love to host your special event. Contact us to discuss private dining options and catering services."
            },
            {
              id: "6",
              title: "Do you offer delivery or takeout?",
              content: "Yes, we offer both delivery and takeout. Orders can be placed through our website or by calling us directly."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Reserve Your Table"
          description="Join us for an authentic Mediterranean dining experience. Fill out the form below and we'll confirm your reservation shortly."
          inputs={[
            { name: "name", type: "text", placeholder: "Your name", required: true },
            { name: "email", type: "email", placeholder: "Email address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone number", required: true },
            { name: "date", type: "date", placeholder: "Preferred date", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or dietary preferences",
            rows: 4,
            required: false
          }}
          useInvertedBackground="noInvert"
          buttonText="Request Reservation"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Sababa Tel Aviv"
          columns={[
            {
              items: [
                { label: "Home", href: "hero" },
                { label: "About", href: "about" },
                { label: "Menu", href: "featured" }
              ]
            },
            {
              items: [
                { label: "Reviews", href: "testimonials" },
                { label: "Contact", href: "contact" },
                { label: "Privacy Policy", href: "#" }
              ]
            },
            {
              items: [
                { label: "Hours", href: "#" },
                { label: "Location", href: "#" },
                { label: "Follow Us", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
