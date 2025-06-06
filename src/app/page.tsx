'use client'

import Image from "next/image";
import { useState, useEffect } from 'react'

export default function Home() {
  const [currentFrame, setCurrentFrame] = useState(0)
  const frames = ['header2_1_t1.png', 'header2_2_t1.png', 'header2_3_t1.png']

  // Title Animation
  const [currentTitleFrame, setCurrentTitleFrame] = useState(0)
  const titleFrames = ['title-1.png', 'title-2.png', 'title-3.png']

  // Spinning Kusa Animation
  const [currentSpinFrame, setCurrentSpinFrame] = useState(0)
  const spinFrames = [
    'Spinning-kusa-1-1.png', 'Spinning-kusa-1-2.png', 'Spinning-kusa-1-3.png', 'Spinning-kusa-1-4.png', 'Spinning-kusa-1-5.png',
    'Spinning-kusa-1-6.png', 'Spinning-kusa-1-7.png', 'Spinning-kusa-1-8.png', 'Spinning-kusa-1-9.png', 'Spinning-kusa-1-10.png',
    'Spinning-kusa-1-11.png', 'Spinning-kusa-1-12.png', 'Spinning-kusa-1-13.png', 'Spinning-kusa-1-14.png', 'Spinning-kusa-1-15.png',
    'Spinning-kusa-1-16.png', 'Spinning-kusa-1-17.png', 'Spinning-kusa-1-18.png', 'Spinning-kusa-1-19.png', 'Spinning-kusa-1-20.png'
  ]

  // Kusa Potato Animation  
  const [currentPotatoFrame, setCurrentPotatoFrame] = useState(0)
  const potatoFrames = [
    'Kusa-potato-1-1.png', 'Kusa-potato-1-2.png', 'Kusa-potato-1-3.png', 'Kusa-potato-1-4.png', 'Kusa-potato-1-5.png',
    'Kusa-potato-1-6.png', 'Kusa-potato-1-7.png', 'Kusa-potato-1-8.png', 'Kusa-potato-1-9.png', 'Kusa-potato-1-10.png',
    'Kusa-potato-1-11.png', 'Kusa-potato-1-12.png', 'Kusa-potato-1-13.png', 'Kusa-potato-1-14.png', 'Kusa-potato-1-15.png',
    'Kusa-potato-1-16.png', 'Kusa-potato-1-17.png', 'Kusa-potato-1-18.png', 'Kusa-potato-1-19.png', 'Kusa-potato-1-20.png'
  ]

  // Niki Fly Animation
  const [currentNikiFrame, setCurrentNikiFrame] = useState(0)
  const nikiFrames = [
    '_Niki-fly-1-1.png', '_Niki-fly-1-2.png', '_Niki-fly-1-3.png', '_Niki-fly-1-4.png', '_Niki-fly-1-5.png', '_Niki-fly-1-6.png'
  ]

  // Yanu Walk Animation
  const [currentYanuFrame, setCurrentYanuFrame] = useState(0)
  const yanuFrames = [
    'Yanu-walk-1-1.png', 'Yanu-walk-1-2.png', 'Yanu-walk-1-3.png', 'Yanu-walk-1-4.png', 'Yanu-walk-1-5.png',
    'Yanu-walk-1-6.png', 'Yanu-walk-1-7.png', 'Yanu-walk-1-8.png'
  ]

  // Inu Run Animation
  const [currentInuFrame, setCurrentInuFrame] = useState(0)
  const inuFrames = [
    'Inu-run-1-1.png', 'Inu-run-1-2.png', 'Inu-run-1-3.png', 'Inu-run-1-4.png', 'Inu-run-1-5.png',
    'Inu-run-1-6.png', 'Inu-run-1-7.png', 'Inu-run-1-8.png', 'Inu-run-1-9.png', 'Inu-run-1-10.png'
  ]

  // Tenshi-Akuma Animation
  const [currentTenshiFrame, setCurrentTenshiFrame] = useState(0)
  const tenshiFrames = [
    'Tenshi-Akuma-1-1.png', 'Tenshi-Akuma-1-2.png', 'Tenshi-Akuma-1-3.png', 'Tenshi-Akuma-1-4.png', 'Tenshi-Akuma-1-5.png', 'Tenshi-Akuma-1-6.png'
  ]

  // Kocho Camera Animation
  const [currentKochoFrame, setCurrentKochoFrame] = useState(0)
  const kochoFrames = [
    'Kocho-camera-1-1.png', 'Kocho-camera-1-2.png', 'Kocho-camera-1-3.png', 'Kocho-camera-1-4.png', 'Kocho-camera-1-5.png',
    'Kocho-camera-1-6.png', 'Kocho-camera-1-7.png', 'Kocho-camera-1-8.png', 'Kocho-camera-1-9.png', 'Kocho-camera-1-10.png',
    'Kocho-camera-1-11.png', 'Kocho-camera-1-12.png', 'Kocho-camera-1-13.png', 'Kocho-camera-1-14.png', 'Kocho-camera-1-15.png',
    'Kocho-camera-1-16.png', 'Kocho-camera-1-17.png', 'Kocho-camera-1-18.png', 'Kocho-camera-1-19.png', 'Kocho-camera-1-20.png'
  ]

  // Mobu Clap Animation
  const [currentMobFrame, setCurrentMobFrame] = useState(0)
  const mobFrames = [
    'Mobu-clap-1-1.png', 'Mobu-clap-1-2.png', 'Mobu-clap-1-3.png'
  ]

  // Xavier Frame Animation
  const [currentXavierFrame, setCurrentXavierFrame] = useState(0)
  const xavierFrames = [
    'Xavier-1-1.png', 'Xavier-1-2.png', 'Xavier-1-3.png', 'Xavier-1-4.png', 'Xavier-1-5.png',
    'Xavier-1-6.png', 'Xavier-1-7.png', 'Xavier-1-8.png', 'Xavier-1-9.png', 'Xavier-1-10.png',
    'Xavier-1-11.png', 'Xavier-1-12.png', 'Xavier-1-13.png', 'Xavier-1-14.png', 'Xavier-1-15.png',
    'Xavier-1-16.png', 'Xavier-1-17.png', 'Xavier-1-18.png', 'Xavier-1-19.png', 'Xavier-1-20.png'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length)
    }, 100) // 10fps = 100ms per frame

    return () => clearInterval(interval)
  }, [frames.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleFrame((prev) => (prev + 1) % titleFrames.length)
    }, 120) // 8fps = 120ms per frame

    return () => clearInterval(interval)
  }, [titleFrames.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPotatoFrame((prev) => (prev + 1) % potatoFrames.length)
    }, 50) // 20fps = 50ms per frame

    return () => clearInterval(interval)
  }, [potatoFrames.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNikiFrame((prev) => (prev + 1) % nikiFrames.length)
    }, 35) // 30fps = 33ms per frame

    return () => clearInterval(interval)
  }, [nikiFrames.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYanuFrame((prev) => (prev + 1) % yanuFrames.length)
    }, 50) // 20fps = 50ms per frame

    return () => clearInterval(interval)
  }, [yanuFrames.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInuFrame((prev) => (prev + 1) % inuFrames.length)
    }, 42) // 30fps = 33ms per frame

    return () => clearInterval(interval)
  }, [inuFrames.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTenshiFrame((prev) => (prev + 1) % tenshiFrames.length)
    }, 42) // 24fps = 42ms per frame

    return () => clearInterval(interval)
  }, [tenshiFrames.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKochoFrame((prev) => (prev + 1) % kochoFrames.length)
    }, 50) // 20fps = 50ms per frame

    return () => clearInterval(interval)
  }, [kochoFrames.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMobFrame((prev) => (prev + 1) % mobFrames.length)
    }, 50) // 5fps = 200ms per frame (slower for 3 frames)

    return () => clearInterval(interval)
  }, [mobFrames.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentXavierFrame((prev) => (prev + 1) % xavierFrames.length)
    }, 42) // 24fps = 42ms per frame

    return () => clearInterval(interval)
  }, [xavierFrames.length])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = Math.min(scrollY / documentHeight, 1) // 0 to 1
      const doubleProgress = (scrollProgress * 2) % 1 // 0 to 1, twice
      const frameIndex = Math.floor(doubleProgress * spinFrames.length)
      setCurrentSpinFrame(frameIndex)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [spinFrames.length])

  return (
    <>
      {/* Fixed Header with Frame Animation */}
      <header 
        className="fixed top-0 left-0 w-full z-[9999] overflow-hidden"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          height: '100px'
        }}
      >
        {/* Animated Frame Images */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={`/${frames[currentFrame]}`}
            alt="Header animation"
            fill
            style={{
              objectFit: 'cover'
            }}
            priority
          />
        </div>

        {/* Header Content Container */}
        <div className="relative z-10 h-full flex items-center justify-between px-4 sm:px-6 md:px-8">
          
          {/* Left Spacer to balance the right-side icons - hidden on mobile */}
          <div className="hidden sm:block" style={{ width: '120px' }} />

          {/* Centered Logo/Title */}
          <div className="flex-shrink-0">
            <Image
              src={`/${titleFrames[currentTitleFrame]}`}
              alt="Drinkable Kusa Logo"
              width={150}
              height={45}
              className="object-contain sm:w-[180px] sm:h-[54px] md:w-[200px] md:h-[60px]"
              priority
            />
          </div>

          {/* Right Side - Navigation Icons */}
          <div className="flex items-center justify-end gap-2 sm:gap-3" style={{ width: '120px' }}>
            {/* LINE Icon */}
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              style={{
                width: '36px',
                height: '36px',
                padding: '8px'
              }}
              aria-label="LINE"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" fill="white"/>
              </svg>
            </a>

            {/* Store Icon */}
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              style={{
                width: '36px',
                height: '36px',
                padding: '8px'
              }}
              aria-label="Store"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]">
                <path d="M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5H5.21L4.27 3H1ZM17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18Z" fill="white"/>
              </svg>
            </a>

            {/* YouTube Icon */}
            <a 
              href="https://www.youtube.com/@drinkable_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              style={{
                width: '36px',
                height: '36px',
                padding: '8px'
              }}
              aria-label="YouTube"
            >
              <svg width="20" height="15" viewBox="0 0 24 17" fill="none" className="sm:w-[22px] sm:h-[16px] md:w-[24px] md:h-[17px]">
                <path d="M23.498 2.686a3.016 3.016 0 0 0-2.122-2.136C19.505 0.045 12 0.045 12 0.045s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 2.686C0 4.57 0 8.5 0 8.5s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 12.43 24 8.5 24 8.5s0-3.93-.502-5.814z" fill="#FFFFFF"/>
                <path d="M9.545 12.068V4.932L15.818 8.5l-6.273 3.568z" fill="#FF0000"/>
              </svg>
            </a>
          </div>
        </div>
      </header>

      <main className="min-h-screen" style={{paddingTop: '100px'}}>
        {/* Hero Section */}
        <section className="relative bg-white overflow-hidden" style={{
          height: 'calc(100vh - 100px)',
          minHeight: '400px'
        }}>
          {/* Background Video - Responsive */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover sm:object-contain"
            style={{
              zIndex: 0
            }}
          >
            <source src="/hero4_proxy_compressed.mov" type="video/mp4" />
          </video>
          
          {/* Content overlay */}
          <div className="relative z-10 flex items-center justify-center w-full h-full px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="text-center">
              {/* Hero content can go here if needed */}
            </div>
          </div>
        </section>

        {/* Character Description Section - Responsive */}
        <section className="bg-white min-h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8 pb-32 sm:pb-40 lg:pb-48">
          <div className="max-w-6xl w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-black">
              キャラクター
            </h1>
            
            {/* Characters Stack */}
            <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-12">
              
              {/* 1. くさ */}
              <div className="w-full flex justify-center">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-4xl bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                  <div className="flex-shrink-0">
                    <Image
                      src={`/${potatoFrames[currentPotatoFrame]}`}
                      alt="くさ character"
                      width={200}
                      height={200}
                      className="object-contain sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px]"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 sm:mb-4 lg:mb-6 text-gray-800">
                      くさ
                    </h2>
                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4 lg:p-6">
                      <ul className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed space-y-2 sm:space-y-3">
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>くいしんぼう（デブ）</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>あほ</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>ザコ</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>怠惰</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>浅はかでチョロい</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>忍耐力（防御力）が異常に高い</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. ニキ */}
              <div className="w-full flex justify-center">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-4xl bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                  <div className="flex-shrink-0">
                    <Image
                      src={`/${nikiFrames[currentNikiFrame]}`}
                      alt="ニキ character"
                      width={200}
                      height={200}
                      className="object-contain sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px]"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 sm:mb-4 lg:mb-6 text-gray-800">
                      ニキ
                    </h2>
                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4 lg:p-6">
                      <ul className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed space-y-2 sm:space-y-3">
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>超絶ムキムキ</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>銀河系最強の戦闘能力</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>振る舞いがオトメ</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>心優しく正義心が強い</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>くさを友達だと思っている</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>くさに痩せてほしい</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>力加減を知らない</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>くさと同級生</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. ヤヌ */}
              <div className="w-full flex justify-center">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-4xl bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                  <div className="flex-shrink-0">
                    <Image
                      src={`/${yanuFrames[currentYanuFrame]}`}
                      alt="ヤヌ character"
                      width={200}
                      height={200}
                      className="object-contain sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px]"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 sm:mb-4 lg:mb-6 text-gray-800">
                      ヤヌ
                    </h2>
                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4 lg:p-6">
                      <ul className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed space-y-2 sm:space-y-3">
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>中性的</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>知的</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>冷静</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>勉強が得意</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>何かを隠している</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>正体不明</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>くさの同級生</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. イヌ */}
              <div className="w-full flex justify-center">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-4xl bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                  <div className="flex-shrink-0">
                    <Image
                      src={`/${inuFrames[currentInuFrame]}`}
                      alt="イヌ character"
                      width={200}
                      height={200}
                      className="object-contain sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px]"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 sm:mb-4 lg:mb-6 text-gray-800">
                      イヌ
                    </h2>
                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4 lg:p-6">
                      <ul className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed space-y-2 sm:space-y-3">
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>いぬ</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>忠実</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>頭がいい</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>人間界出身</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>くさが飼い主（実質主人）</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>足が速い</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. コチョ */}
              <div className="w-full flex justify-center">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-4xl bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                  <div className="flex-shrink-0">
                    <Image
                      src={`/${kochoFrames[currentKochoFrame]}`}
                      alt="コチョ character"
                      width={200}
                      height={200}
                      className="object-contain sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px]"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 sm:mb-4 lg:mb-6 text-gray-800">
                      コチョ
                    </h2>
                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4 lg:p-6">
                      <ul className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed space-y-2 sm:space-y-3">
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>さっぱりしている</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>明るい</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>つよい</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>写真家</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>くさの同級生</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. ザビエル・ハエ */}
              <div className="w-full flex justify-center">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-4xl bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                  <div className="flex-shrink-0">
                    <Image
                      src={`/${xavierFrames[currentXavierFrame]}`}
                      alt="ザビエル・ハエ character"
                      width={200}
                      height={200}
                      className="object-contain sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px]"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 sm:mb-4 lg:mb-6 text-gray-800">
                      ザビエル・ハエ
                    </h2>
                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4 lg:p-6">
                      <ul className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed space-y-2 sm:space-y-3">
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>天才少年</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>ナルシスト</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>中二病</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>意識が高い</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>悪魔と天使が宿っている</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>人格が分裂気味</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>ゲームが得意</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>ゲームクリエイター志望</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>くさの同級生</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 7. モブ */}
              <div className="w-full flex justify-center">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-4xl bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                  <div className="flex-shrink-0">
                    <Image
                      src={`/${mobFrames[currentMobFrame]}`}
                      alt="モブ character"
                      width={200}
                      height={200}
                      className="object-contain sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px]"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 sm:mb-4 lg:mb-6 text-gray-800">
                      モブ
                    </h2>
                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4 lg:p-6">
                      <ul className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed space-y-2 sm:space-y-3">
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>どこにでもいそう</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>手をたたいて応援するのが好き</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>根っからの良い奴</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>地域の人気者</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>年齢不詳（大人？子供？）</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Spinning Character Section - Responsive */}
        <section className="relative min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16 text-black">
              おまけ
            </h2>
            <div className="flex justify-center">
              <Image
                src={`/${spinFrames[currentSpinFrame]}`}
                alt="Spinning Kusa"
                width={200}
                height={200}
                className="object-contain sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px]"
              />
            </div>
            <p className="mt-6 sm:mt-8 lg:mt-12 text-sm sm:text-base lg:text-lg text-gray-600 max-w-md mx-auto">
              スクロールしてくさを回してみよう！
            </p>
          </div>
        </section>

        {/* Footer - Responsive */}
        <footer className="bg-gray-900 text-white py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">
              ドリンカブル🥬
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
              くさとその仲間たちの冒険は続く...
            </p>
            <div className="flex justify-center space-x-4 sm:space-x-6">
              <a 
                href="#" 
                className="text-green-400 hover:text-green-300 transition-colors text-sm sm:text-base"
              >
                LINE
              </a>
              <a 
                href="#" 
                className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base"
              >
                Store
              </a>
              <a 
                href="https://www.youtube.com/@drinkable_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 transition-colors text-sm sm:text-base"
              >
                YouTube
              </a>
            </div>
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-700">
              <p className="text-xs sm:text-sm text-gray-400">
                © 2024 Drinkable Kusa. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>

      {/* Fixed Footer with Upside Down Animation */}
      <footer 
        className="fixed bottom-0 left-0 w-full z-[9999] overflow-hidden"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          height: '128px'
        }}
      >
        {/* Animated Frame Images - Upside Down */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={`/${frames[currentFrame]}`}
            alt="Footer animation"
            fill
            style={{
              objectFit: 'cover',
              transform: 'scaleY(-1)'
            }}
            priority
          />
        </div>
      </footer>

      {/* Fixed Bottom-Right Spinning Kusa */}
      <div 
        className="fixed right-4 z-[10000]"
        style={{
          bottom: '110px', // 158px footer height + 16px gap
          right: '50px',
          width: '140px',
          height: '140px',
          // backgroundColor: 'rgba(255, 0, 0, 0.3)' // Temporary red background for debugging
        }}
      >
        <Image
          src={`/${spinFrames[currentSpinFrame]}`}
          alt="Spinning Kusa"
          fill
          style={{
            objectFit: 'contain'
          }}
          priority
        />
    </div>
    </>
  );
}
