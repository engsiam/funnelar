"use client"

import { useEffect } from "react"

interface ImagePreloaderProps {
  imagePaths: string[]
}

export function ImagePreloader({ imagePaths }: ImagePreloaderProps) {
  useEffect(() => {
    // Preload images
    imagePaths.forEach((path) => {
      const img = new Image()
      img.src = path
    })
  }, [imagePaths])

  // This component doesn't render anything
  return null
}

