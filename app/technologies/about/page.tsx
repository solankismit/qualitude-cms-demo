import { Cpu, Users, Target, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-6 bg-black text-white py-12 rounded-lg shadow-lg">
          <h1 className="text-5xl font-extrabold tracking-tight">About Us</h1>
          <p className="text-lg leading-relaxed">
            At Qualitude, we are committed to empowering innovation through technology and sustainable solutions. Our team of experts is dedicated to providing cutting-edge services in app development, web development, AI solutions, and solar technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Target className="h-10 w-10 text-white mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-white">Our Mission</h2>
            <p className="text-base text-white leading-relaxed">
              Our mission is to drive progress and innovation by delivering high-quality technology solutions that meet the evolving needs of our clients. We strive to create a positive impact on society and the environment through sustainable practices and forward-thinking strategies.
            </p>
          </div>

          <div className="bg-black p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Users className="h-10 w-10 text-white mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-white">Our Team</h2>
            <p className="text-base text-white leading-relaxed">
              Our team consists of passionate professionals with diverse expertise in technology and sustainability. We work collaboratively to deliver exceptional results and exceed our clients' expectations.
            </p>
          </div>

          <div className="bg-black p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <ShieldCheck className="h-10 w-10 text-white mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-white">Our Values</h2>
            <ul className="list-disc pl-5 text-base text-white leading-relaxed">
              <li>Innovation: We embrace change and encourage creativity to stay ahead in the industry.</li>
              <li>Sustainability: We prioritize eco-friendly solutions and practices in all our projects.</li>
              <li>Integrity: We uphold the highest standards of ethics and transparency in our work.</li>
              <li>Collaboration: We believe in the power of teamwork and partnerships to achieve common goals.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 