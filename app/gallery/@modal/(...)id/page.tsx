"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, use } from "react";
import ImageModal from "../components/ImageModal";
import axiosInstance from "../../utiles/axios";

export default function InterceptedModal({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [image, setImage] = useState(null);

  
  const resolvedParams = use(params); 
  const { id } = resolvedParams;

  useEffect(() => {
    async function fetchImage() {
      try {
        const res = await axiosInstance.get(`/photos/${id}`);
        setImage(res.data);
      } catch (err) {
        console.error("Failed to fetch image:", err);
      }
    }
    fetchImage();
  }, [id]);

  if (!image) return null;

  return <ImageModal image={image} onClose={() => router.back()} />;
}
