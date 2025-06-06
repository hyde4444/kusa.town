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
  const [currentMobuFrame, setCurrentMobuFrame] = useState(0)
  const mobuFrames = [
    'Mobu-clap-1-1.png', 'Mobu-clap-1-2.png', 'Mobu-clap-1-3.png'
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
      setCurrentMobuFrame((prev) => (prev + 1) % mobuFrames.length)
    }, 50) // 5fps = 200ms per frame (slower for 3 frames)

    return () => clearInterval(interval)
  }, [mobuFrames.length])

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
          height: '128px'
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
        <div className="relative z-10 h-full flex items-center justify-between px-8">
          
          {/* Left Spacer to balance the right-side icons */}
          <div style={{ width: '176px' }} />

          {/* Centered Logo/Title */}
          <div className="flex-shrink-0">
            <Image
              src={`/${titleFrames[currentTitleFrame]}`}
              alt="Drinkable Kusa Logo"
              width={200}
              height={60}
              className="object-contain"
              priority
            />
          </div>

          {/* Right Side - Navigation Icons */}
          <div className="flex items-center justify-end gap-4" style={{ width: '176px' }}>
            {/* LINE Icon */}
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              style={{
                width: '48px',
                height: '48px',
                padding: '12px'
              }}
              aria-label="LINE"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
                width: '48px',
                height: '48px',
                padding: '12px'
              }}
              aria-label="Store"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
                width: '48px',
                height: '48px',
                padding: '12px'
              }}
              aria-label="YouTube"
            >
              <svg width="24" height="17" viewBox="0 0 24 17" fill="none">
                <path d="M23.498 2.686a3.016 3.016 0 0 0-2.122-2.136C19.505 0.045 12 0.045 12 0.045s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 2.686C0 4.57 0 8.5 0 8.5s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 12.43 24 8.5 24 8.5s0-3.93-.502-5.814z" fill="#FFFFFF"/>
                <path d="M9.545 12.068V4.932L15.818 8.5l-6.273 3.568z" fill="#FF0000"/>
              </svg>
            </a>
          </div>
        </div>
      </header>

      <main className="min-h-screen" style={{paddingTop: '0px'}}>
        {/* Hero Section */}
        <section style={{height: '1080px', backgroundColor: '#FFFFFF', marginTop: '0px', position: 'relative', overflow: 'hidden'}}>
          {/* Background Video - Fixed Size */}
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '1920px',
              height: '1080px',
              // objectFit: 'contain',
              objectPosition: 'center top',
              zIndex: 0
            }}
          >
            <source src="/hero4_proxy_compressed.mov" type="video/mp4" />
          </video>
          
          {/* Content overlay */}
          <div className="relative z-10 flex items-center justify-between w-full h-full px-8 md:px-16 lg:px-24">
            <div className="flex-1">
              {/* <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-black">
                ドリンカブル🥬
              </h1> */}
            </div>
            <div className="flex-1 flex justify-center items-center">
              <div className="relative">
                {/* <Image
                  src="/kusa_run.png"
                  alt="くさ character"
                  width={400}
                  height={400}
                  className="object-contain"
                /> */}
              </div>
            </div>
          </div>
        </section>

        {/* Character Description Section - Simple White Background */}
        <section style={{
          backgroundColor: '#FFFFFF',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          paddingBottom: '200px'
        }}>
          <div style={{
            maxWidth: '1200px',
            width: '100%'
          }}>
            <h1 style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '3rem',
              color: 'black'
            }}>キャラクター</h1>
            
            {/* Characters Stack */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4rem'
            }}>
              
              {/* 1. くさ */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '3rem',
                  width: '800px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(0, 0, 0, 0.05)'
                }}>
                  <div style={{flexShrink: 0}}>
                    <Image
                      src={`/${potatoFrames[currentPotatoFrame]}`}
                      alt="くさ character"
                      width={300}
                      height={300}
                      className="object-contain"
                    />
                  </div>
                  <div style={{flex: 1}}>
                    <h2 style={{
                      fontSize: '2.5rem',
                      fontWeight: '800',
                      marginBottom: '1.5rem',
                      color: '#1f2937',
                      letterSpacing: '-0.025em'
                    }}>くさ</h2>
                    <div style={{
                      backgroundColor: '#f8fafc',
                      borderRadius: '12px',
                      padding: '1.5rem'
                    }}>
                      <ul style={{
                        fontSize: '1.25rem',
                        color: '#374151',
                        lineHeight: '1.8',
                        listStyle: 'none',
                        margin: 0,
                        padding: 0
                      }}>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>くいしんぼう（デブ）</span>
                        </li>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>あほ</span>
                        </li>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>ザコ</span>
                        </li>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>怠惰</span>
                        </li>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>浅はかでチョロい</span>
                        </li>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>忍耐力（防御力）が異常に高い</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. ニキ */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '3rem',
                  width: '800px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(0, 0, 0, 0.05)'
                }}>
                  <div style={{flexShrink: 0}}>
                    <Image
                      src={`/${nikiFrames[currentNikiFrame]}`}
                      alt="ニキ character"
                      width={300}
                      height={300}
                      className="object-contain"
                    />
                  </div>
                  <div style={{flex: 1}}>
                    <h2 style={{
                      fontSize: '2.5rem',
                      fontWeight: '800',
                      marginBottom: '1.5rem',
                      color: '#1f2937',
                      letterSpacing: '-0.025em'
                    }}>ニキ</h2>
                    <div style={{
                      backgroundColor: '#f8fafc',
                      borderRadius: '12px',
                      padding: '1.5rem'
                    }}>
                      <ul style={{
                        fontSize: '1.25rem',
                        color: '#374151',
                        lineHeight: '1.8',
                        listStyle: 'none',
                        margin: 0,
                        padding: 0
                      }}>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>超絶ムキムキ</span>
                        </li>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>銀河系最強の戦闘能力</span>
                        </li>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>振る舞いがオトメ</span>
                        </li>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>心優しく正義心が強い</span>
                        </li>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>くさを友達だと思っている</span>
                        </li>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>くさに痩せてほしい</span>
                        </li>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>力加減を知らない</span>
                        </li>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>くさと同級生</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. ヤヌ */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '3rem',
                  width: '800px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(0, 0, 0, 0.05)'
                }}>
                  <div style={{flexShrink: 0}}>
                    <Image
                      src={`/${yanuFrames[currentYanuFrame]}`}
                      alt="ヤヌ character"
                      width={300}
                      height={300}
                      className="object-contain"
                    />
                  </div>
                  <div style={{flex: 1}}>
                    <h2 style={{
                      fontSize: '2.5rem',
                      fontWeight: '800',
                      marginBottom: '1.5rem',
                      color: '#1f2937',
                      letterSpacing: '-0.025em'
                    }}>ヤヌ</h2>
                    <div style={{
                      backgroundColor: '#f8fafc',
                      borderRadius: '12px',
                      padding: '1.5rem'
                    }}>
                      <ul style={{
                        fontSize: '1.25rem',
                        color: '#374151',
                        lineHeight: '1.8',
                        listStyle: 'none',
                        margin: 0,
                        padding: 0
                      }}>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>くさのペット</span>
                        </li>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>くさをペットだと思っている</span>
                        </li>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>かなり頭が良い</span>
                        </li>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>姑息で狡猾</span>
                        </li>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>世渡り上手</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. いぬ */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '3rem',
                  width: '800px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(0, 0, 0, 0.05)'
                }}>
                  <div style={{flexShrink: 0}}>
                    <Image
                      src={`/${inuFrames[currentInuFrame]}`}
                      alt="いぬ character"
                      width={300}
                      height={300}
                      className="object-contain"
                    />
                  </div>
                  <div style={{flex: 1}}>
                    <h2 style={{
                      fontSize: '2.5rem',
                      fontWeight: '800',
                      marginBottom: '1.5rem',
                      color: '#1f2937',
                      letterSpacing: '-0.025em'
                    }}>いぬ</h2>
                    <div style={{
                      backgroundColor: '#f8fafc',
                      borderRadius: '12px',
                      padding: '1.5rem'
                    }}>
                      <ul style={{
                        fontSize: '1.25rem',
                        color: '#374151',
                        lineHeight: '1.8',
                        listStyle: 'none',
                        margin: 0,
                        padding: 0
                      }}>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>ニキに命を救われた</span>
                        </li>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>ニキの筋トレ教本でバキバキに</span>
                        </li>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>ニキの友達であるくさに興味津々</span>
                        </li>
                        {/* <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>くさとニキに飼われていると思っている</span>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. ザビエル・ハエ */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '3rem',
                  width: '800px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(0, 0, 0, 0.05)'
                }}>
                  <div style={{flexShrink: 0}}>
                    <Image
                      src={`/${tenshiFrames[currentTenshiFrame]}`}
                      alt="ザビエル・ハエ character"
                      width={300}
                      height={300}
                      className="object-contain"
                    />
                  </div>
                  <div style={{flex: 1}}>
                    <h2 style={{
                      fontSize: '2.5rem',
                      fontWeight: '800',
                      marginBottom: '1.5rem',
                      color: '#1f2937',
                      letterSpacing: '-0.025em'
                    }}>ザビエル・ハエ</h2>
                    <div style={{
                      backgroundColor: '#f8fafc',
                      borderRadius: '12px',
                      padding: '1.5rem'
                    }}>
                      <ul style={{
                        fontSize: '1.25rem',
                        color: '#374151',
                        lineHeight: '1.8',
                        listStyle: 'none',
                        margin: 0,
                        padding: 0
                      }}>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>天使と悪魔ぽく登場したが一般人</span>
                        </li>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>くさと同様ザコ</span>
                        </li>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>ザビエルはハゲを気にしている</span>
                        </li>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>ハエはハエであることを気にしている</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. 校長 */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '3rem',
                  width: '800px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(0, 0, 0, 0.05)'
                }}>
                  <div style={{flexShrink: 0}}>
          <Image
                      src={`/${kochoFrames[currentKochoFrame]}`}
                      alt="校長 character"
                      width={300}
                      height={300}
                      className="object-contain"
                    />
                  </div>
                  <div style={{flex: 1}}>
                    <h2 style={{
                      fontSize: '2.5rem',
                      fontWeight: '800',
                      marginBottom: '1.5rem',
                      color: '#1f2937',
                      letterSpacing: '-0.025em'
                    }}>校長</h2>
                    <div style={{
                      backgroundColor: '#f8fafc',
                      borderRadius: '12px',
                      padding: '1.5rem'
                    }}>
                      <ul style={{
                        fontSize: '1.25rem',
                        color: '#374151',
                        lineHeight: '1.8',
                        listStyle: 'none',
                        margin: 0,
                        padding: 0
                      }}>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>くさとニキが通う学校の校長</span>
                        </li>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>テキトー</span>
                        </li>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>金持ち</span>
                        </li>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>お札の顔になっている</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 7. モブ */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '3rem',
                  width: '800px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(0, 0, 0, 0.05)'
                }}>
                  <div style={{flexShrink: 0}}>
          <Image
                      src={`/${mobuFrames[currentMobuFrame]}`}
                      alt="モブ character"
                      width={300}
                      height={300}
                      className="object-contain"
                    />
                  </div>
                  <div style={{flex: 1}}>
                    <h2 style={{
                      fontSize: '2.5rem',
                      fontWeight: '800',
                      marginBottom: '1.5rem',
                      color: '#1f2937',
                      letterSpacing: '-0.025em'
                    }}>モブ</h2>
                    <div style={{
                      backgroundColor: '#f8fafc',
                      borderRadius: '12px',
                      padding: '1.5rem'
                    }}>
                      <ul style={{
                        fontSize: '1.25rem',
                        color: '#374151',
                        lineHeight: '1.8',
                        listStyle: 'none',
                        margin: 0,
                        padding: 0
                      }}>
                        <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'center'}}>
                          <span style={{color: '#10b981', fontWeight: 'bold', marginRight: '0.75rem'}}>●</span>
                          <span>モブキャラ</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
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
