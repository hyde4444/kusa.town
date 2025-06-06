'use client'

import Image from "next/image";
import { useState, useEffect, useRef } from 'react'

// Frame arrays moved outside component to prevent recreation on every render
const frames = ['header2_1_t1.png', 'header2_2_t1.png', 'header2_3_t1.png']
const titleFrames = ['title-1.png', 'title-2.png', 'title-3.png']
const spinFrames = [
  'Spinning-kusa-1-1.png', 'Spinning-kusa-1-2.png', 'Spinning-kusa-1-3.png', 'Spinning-kusa-1-4.png', 'Spinning-kusa-1-5.png',
  'Spinning-kusa-1-6.png', 'Spinning-kusa-1-7.png', 'Spinning-kusa-1-8.png', 'Spinning-kusa-1-9.png', 'Spinning-kusa-1-10.png',
  'Spinning-kusa-1-11.png', 'Spinning-kusa-1-12.png', 'Spinning-kusa-1-13.png', 'Spinning-kusa-1-14.png', 'Spinning-kusa-1-15.png',
  'Spinning-kusa-1-16.png', 'Spinning-kusa-1-17.png', 'Spinning-kusa-1-18.png', 'Spinning-kusa-1-19.png', 'Spinning-kusa-1-20.png'
]
const potatoFrames = [
  'Kusa-potato-1-1.png', 'Kusa-potato-1-2.png', 'Kusa-potato-1-3.png', 'Kusa-potato-1-4.png', 'Kusa-potato-1-5.png',
  'Kusa-potato-1-6.png', 'Kusa-potato-1-7.png', 'Kusa-potato-1-8.png', 'Kusa-potato-1-9.png', 'Kusa-potato-1-10.png',
  'Kusa-potato-1-11.png', 'Kusa-potato-1-12.png', 'Kusa-potato-1-13.png', 'Kusa-potato-1-14.png', 'Kusa-potato-1-15.png',
  'Kusa-potato-1-16.png', 'Kusa-potato-1-17.png', 'Kusa-potato-1-18.png', 'Kusa-potato-1-19.png', 'Kusa-potato-1-20.png'
]
const nikiFrames = [
  '_Niki-fly-1-1.png', '_Niki-fly-1-2.png', '_Niki-fly-1-3.png', '_Niki-fly-1-4.png', '_Niki-fly-1-5.png', '_Niki-fly-1-6.png'
]
const yanuFrames = [
  'Yanu-walk-1-1.png', 'Yanu-walk-1-2.png', 'Yanu-walk-1-3.png', 'Yanu-walk-1-4.png', 'Yanu-walk-1-5.png',
  'Yanu-walk-1-6.png', 'Yanu-walk-1-7.png', 'Yanu-walk-1-8.png'
]
const inuFrames = [
  'Inu-run-1-1.png', 'Inu-run-1-2.png', 'Inu-run-1-3.png', 'Inu-run-1-4.png', 'Inu-run-1-5.png',
  'Inu-run-1-6.png', 'Inu-run-1-7.png', 'Inu-run-1-8.png', 'Inu-run-1-9.png', 'Inu-run-1-10.png'
]
const kochoFrames = [
  'Kocho-camera-1-1.png', 'Kocho-camera-1-2.png', 'Kocho-camera-1-3.png', 'Kocho-camera-1-4.png', 'Kocho-camera-1-5.png',
  'Kocho-camera-1-6.png', 'Kocho-camera-1-7.png', 'Kocho-camera-1-8.png', 'Kocho-camera-1-9.png', 'Kocho-camera-1-10.png',
  'Kocho-camera-1-11.png', 'Kocho-camera-1-12.png', 'Kocho-camera-1-13.png', 'Kocho-camera-1-14.png', 'Kocho-camera-1-15.png',
  'Kocho-camera-1-16.png', 'Kocho-camera-1-17.png', 'Kocho-camera-1-18.png', 'Kocho-camera-1-19.png', 'Kocho-camera-1-20.png'
]
const mobFrames = [
  'Mobu-clap-1-1.png', 'Mobu-clap-1-2.png', 'Mobu-clap-1-3.png'
]
const xavierFrames = [
  'Tenshi-Akuma-1-1.png', 'Tenshi-Akuma-1-2.png', 'Tenshi-Akuma-1-3.png', 'Tenshi-Akuma-1-4.png', 'Tenshi-Akuma-1-5.png', 'Tenshi-Akuma-1-6.png'
]

export default function Home() {
  const [currentFrame, setCurrentFrame] = useState(0)

  // Title Animation
  const [currentTitleFrame, setCurrentTitleFrame] = useState(0)

  // Spinning Kusa Animation
  const [currentSpinFrame, setCurrentSpinFrame] = useState(0)

  // Kusa Potato Animation  
  const [currentPotatoFrame, setCurrentPotatoFrame] = useState(0)

  // Niki Fly Animation
  const [currentNikiFrame, setCurrentNikiFrame] = useState(0)

  // Yanu Walk Animation
  const [currentYanuFrame, setCurrentYanuFrame] = useState(0)

  // Inu Run Animation
  const [currentInuFrame, setCurrentInuFrame] = useState(0)

  // Kocho Camera Animation
  const [currentKochoFrame, setCurrentKochoFrame] = useState(0)

  // Mobu Clap Animation
  const [currentMobFrame, setCurrentMobFrame] = useState(0)

  // Xavier Frame Animation
  const [currentXavierFrame, setCurrentXavierFrame] = useState(0)

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

  // Refs for intersection observer
  const potatoRef = useRef(null)
  const nikiRef = useRef(null)
  const yanuRef = useRef(null)
  const inuRef = useRef(null)
  const kochoRef = useRef(null)
  const mobRef = useRef(null)
  const xavierRef = useRef(null)

  // Animation intervals storage
  const intervalsRef = useRef<Record<string, NodeJS.Timeout>>({})

  // Character animation control
  useEffect(() => {
    const startAnimation = (name: string, setter: (fn: (prev: number) => number) => void, frames: string[], fps: number) => {
      if (intervalsRef.current[name]) {
        console.log(`🔄 ${name} animation already running - skipping start`)
        return // Already running
      }
      
      console.log(`🎬 Starting animation for ${name} at ${fps}fps`)
      const interval = setInterval(() => {
        setter((prev: number) => (prev + 1) % frames.length)
      }, 1000 / fps)
      
      intervalsRef.current[name] = interval
    }

    const stopAnimation = (name: string) => {
      if (intervalsRef.current[name]) {
        console.log(`⏹️ Stopping animation for ${name}`)
        clearInterval(intervalsRef.current[name])
        delete intervalsRef.current[name]
      } else {
        console.log(`❌ ${name} animation already stopped`)
      }
    }

    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      console.log(`👀 Intersection Observer triggered for ${entries.length} entries`)
      
      entries.forEach(entry => {
        const target = entry.target
        const isVisible = entry.isIntersecting
        const ratio = Math.round(entry.intersectionRatio * 100)

        if (target === potatoRef.current) {
          console.log(`🥬 くさ: ${isVisible ? 'ENTERED' : 'EXITED'} viewport (${ratio}% visible)`)
          if (isVisible) {
            startAnimation('potato', setCurrentPotatoFrame, potatoFrames, 20)
          } else {
            stopAnimation('potato')
          }
        } else if (target === nikiRef.current) {
          console.log(`💪 ニキ: ${isVisible ? 'ENTERED' : 'EXITED'} viewport (${ratio}% visible)`)
          if (isVisible) {
            startAnimation('niki', setCurrentNikiFrame, nikiFrames, 30)
          } else {
            stopAnimation('niki')
          }
        } else if (target === yanuRef.current) {
          console.log(`🐱 ヤヌ: ${isVisible ? 'ENTERED' : 'EXITED'} viewport (${ratio}% visible)`)
          if (isVisible) {
            startAnimation('yanu', setCurrentYanuFrame, yanuFrames, 20)
          } else {
            stopAnimation('yanu')
          }
        } else if (target === inuRef.current) {
          console.log(`🐕 イヌ: ${isVisible ? 'ENTERED' : 'EXITED'} viewport (${ratio}% visible)`)
          if (isVisible) {
            startAnimation('inu', setCurrentInuFrame, inuFrames, 24)
          } else {
            stopAnimation('inu')
          }
        } else if (target === kochoRef.current) {
          console.log(`🏫 校長: ${isVisible ? 'ENTERED' : 'EXITED'} viewport (${ratio}% visible)`)
          if (isVisible) {
            startAnimation('kocho', setCurrentKochoFrame, kochoFrames, 20)
          } else {
            stopAnimation('kocho')
          }
        } else if (target === mobRef.current) {
          console.log(`👤 モブ: ${isVisible ? 'ENTERED' : 'EXITED'} viewport (${ratio}% visible)`)
          if (isVisible) {
            startAnimation('mob', setCurrentMobFrame, mobFrames, 20)
          } else {
            stopAnimation('mob')
          }
        } else if (target === xavierRef.current) {
          console.log(`👼 ザビエル・ハエ: ${isVisible ? 'ENTERED' : 'EXITED'} viewport (${ratio}% visible)`)
          if (isVisible) {
            startAnimation('xavier', setCurrentXavierFrame, xavierFrames, 24)
          } else {
            stopAnimation('xavier')
          }
        }
      })
    }, { 
      threshold: 0.1, // Start animation when 10% visible
      rootMargin: '50px' // Start animation 50px before entering viewport
    })

    // Observe all character elements
    const refs = [potatoRef, nikiRef, yanuRef, inuRef, kochoRef, mobRef, xavierRef]
    const characterNames = ['くさ', 'ニキ', 'ヤヌ', 'イヌ', '校長', 'モブ', 'ザビエル・ハエ']
    
    console.log('🔍 Setting up Intersection Observer for characters...')
    refs.forEach((ref, index) => {
      if (ref.current) {
        observer.observe(ref.current)
        console.log(`✅ Observing ${characterNames[index]}`)
      } else {
        console.log(`❌ Failed to observe ${characterNames[index]} - ref not ready`)
      }
    })

    // Add a way to check current animation status
    if (typeof window !== 'undefined') {
      (window as typeof window & { getAnimationStatus: () => { active: number; running: string[] } }).getAnimationStatus = () => {
        const activeAnimations = Object.keys(intervalsRef.current)
        console.log(`📊 Animation Status Report:`)
        console.log(`🎬 Active animations: ${activeAnimations.length}`)
        if (activeAnimations.length > 0) {
          console.log(`📝 Running: ${activeAnimations.join(', ')}`)
        } else {
          console.log(`😴 No animations running`)
        }
        return { active: activeAnimations.length, running: activeAnimations }
      }
    }

    return () => {
      console.log('🧹 Cleaning up Intersection Observer and animations...')
      observer.disconnect()
      // Clean up all intervals
      const currentIntervals = intervalsRef.current
      const activeAnimations = Object.keys(currentIntervals)
      if (activeAnimations.length > 0) {
        console.log(`🛑 Stopping ${activeAnimations.length} active animations: ${activeAnimations.join(', ')}`)
      }
      Object.values(currentIntervals).forEach(interval => clearInterval(interval))
    }
  }, [potatoFrames.length, nikiFrames.length, yanuFrames.length, inuFrames.length, kochoFrames.length, mobFrames.length, xavierFrames.length])

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const documentHeight = document.documentElement.scrollHeight - window.innerHeight
          const scrollProgress = Math.min(scrollY / documentHeight, 1) // 0 to 1
          const doubleProgress = (scrollProgress * 2) % 1 // 0 to 1, twice
          const frameIndex = Math.floor(doubleProgress * spinFrames.length)
          setCurrentSpinFrame(frameIndex)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
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
              objectFit: 'cover',
              objectPosition: 'center'
            }}
            sizes="100vw"
            quality={100}
            unoptimized={true}
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
                <path d="M19.365 9.863c.349 0 .63.285.631.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" fill="white"/>
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

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-white overflow-hidden" style={{
          height: '100vh',
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
                <div ref={potatoRef} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-4xl bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
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
                          <span>急停</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>法はかでチョロい</span>
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
                <div ref={nikiRef} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-4xl bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
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
                <div ref={yanuRef} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-4xl bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
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
                          <span>くさのペット</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>姑息で狡猾</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>人間界出身</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>語尾に「にゃ」をつけたがる</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>ニキにライバル心を抱いている</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>しっぽがある</span>
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
                <div ref={inuRef} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-4xl bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
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
                          <span>ニキに命を救われた</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>バキバキに筋肉をつけようとしている</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>ニキを尊敬している</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>真面目</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>努力家</span>
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

              {/* 5. コチョ */}
              <div className="w-full flex justify-center">
                <div ref={kochoRef} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-4xl bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
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
                      校長
                    </h2>
                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4 lg:p-6">
                      <ul className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed space-y-2 sm:space-y-3">
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>テキトー</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>金持ち</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>ノリがいい</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>趣味は写真</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>くさ達の学校の校長</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. ザビエル・ハエ */}
              <div className="w-full flex justify-center">
                <div ref={xavierRef} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-4xl bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
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
                          <span>天使と悪魔ぽく登場したが一般人</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>実は普通</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>空気が読めない</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>天然</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 sm:mr-3 flex-shrink-0">●</span>
                          <span>優しい</span>
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
                <div ref={mobRef} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-4xl bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
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
        
        {/* Bottom spacer to ensure content is visible above footer - 100px footer + extra space */}
        <div style={{ height: '150px' }}></div>
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
          height: '100px'
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
              objectPosition: 'center',
              transform: 'scaleY(-1)'
            }}
            sizes="100vw"
            quality={100}
            unoptimized={true}
            priority
          />
        </div>
      </footer>

      {/* Fixed Bottom-Right Spinning Kusa - Responsive */}
      <div 
        className="fixed z-[10000] spinning-kusa-container"
        style={{
          bottom: '110px', // 100px footer height + 10px gap
          right: '20px',
          width: '80px',
          height: '80px',
        }}
      >
        <Image
          src={`/${spinFrames[currentSpinFrame]}`}
          alt="Spinning Kusa"
          fill
          sizes="(max-width: 640px) 80px, 140px"
          style={{
            objectFit: 'contain'
          }}
          priority
        />
    </div>

      {/* CSS for responsive spinning kusa */}
      <style jsx>{`
        @media (min-width: 640px) {
          .spinning-kusa-container {
            right: 50px !important;
            width: 140px !important;
            height: 140px !important;
          }
        }
      `}</style>
    </>
  );
}
