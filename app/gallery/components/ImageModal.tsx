"use client";
import { IPostType } from "@/app/types/post";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ImageModal({
  image,
  onClose,
}: {
  image: IPostType;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 py-4 bg-black/70 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl p-4 max-w-3xl w-full mx-4 relative transition-colors duration-300"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300"
          >
            ✕
          </button>

          <Image
            src={image.urls.regular}
            alt={image.alt_description || "photo"}
            width={image.width}
            height={image.height}
            unoptimized
            className="rounded-xl mb-4 w-full p-4 h-auto object-cover"
          />

          <p className="text-gray-700 dark:text-gray-200 transition-colors duration-300">
            {image.alt_description}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
