"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import axiosInstance from "../utiles/axios";
import Link from "next/link";
import Navbar from "./components/Navbar";
import { IPostType } from "../types/post";

export default function MixedGallery() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loader = useRef(null);

  const fetchImages = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get("/photos/", {
        params: {
          page,
          per_page: 15,
        },
      });
      setImages((prev) => [...prev, ...res.data]);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }, [page]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );
    if (loader.current) observer.observe(loader.current);
    return () => observer.disconnect();
  }, [loading]);

  console.log(images);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 transition-colors duration-300 relative">
      <Navbar />
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((img: IPostType) => (
          <div
            key={img.id}
            className="break-inside-avoid overflow-hidden rounded-2xl shadow-sm bg-white dark:bg-gray-800 transition-colors duration-300"
          >
            <Link href={`/gallery/${img.id}`} scroll={false}>
              <Image
                src={img.urls.small}
                alt={img.alt_description || "photo"}
                width={img.width}
                height={img.height}
                unoptimized
                className="w-full h-auto object-cover hover:opacity-90 hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>
        ))}
      </div>

      <div ref={loader} className="flex justify-center py-10">
        {loading && (
          <span className="text-gray-500 dark:text-gray-400">Loading...</span>
        )}
      </div>

      <button className="fixed bottom-6 right-6 bg-gray-50 dark:bg-gray-900 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 text-3xl">
        +
      </button>
    </main>
  );
}
