import React from "react";
import Hero from "./Hero";
import ListCategoryArticles from "./ListCategoryArticles";
import SideBar from "./SideBar";
import Footer from "@/components/Footer";

export default function Layout() {
  return (
    <div>
        <Hero />
        <section className="main-content">
          <div className="container-xl">
            <div className="row gy-4">
              <div className="col-lg-8">
                <ListCategoryArticles />
              </div>
              <div className="col-lg-4">
                <SideBar />
              </div>
            </div>
          </div>
        </section>
        <Footer />
    </div>
  );
}
