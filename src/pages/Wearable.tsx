
import React from 'react';
import { Heart, Users, Code, Megaphone, Activity, Clock, Shield, Zap, TrendingUp, Globe } from 'lucide-react';

const Wearable = () => {
  const roles = [
    {
      shape: "Patient",
      role: "Share wearable data, vote on research priorities, mentor peers",
      impact: "Drive studies that reflect real-world needs",
      icon: Heart
    },
    {
      shape: "Scientist / Clinician", 
      role: "Co-develop biomarkers and trial protocols, interpret wearable insights",
      impact: "Accelerate discovery through real-time data",
      icon: Activity
    },
    {
      shape: "Developer",
      role: "Build secure, privacy-first web and app platforms", 
      impact: "Empower seamless, trust-driven data sharing",
      icon: Code
    },
    {
      shape: "Community Advocate",
      role: "Raise awareness, recruit participants from diverse backgrounds",
      impact: "Expand trial access and inclusivity", 
      icon: Megaphone
    }
  ];

  const wearablesBenefits = [
    {
      title: "Real-World, Continuous Biomarker Tracking",
      description: "Wearables—smart rings, patches, wristbands—capture key physiological signals (HRV, movement, sleep, temperature) 24/7. This continuous, real-world data reveals treatment effects and life patterns clinics often miss.",
      icon: Activity
    },
    {
      title: "Patient-Centric Design", 
      description: "Passive, remote monitoring reduces burden and enhances access—especially for rural or underserved individuals—ensuring trials represent diverse lived realities.",
      icon: Heart
    },
    {
      title: "Objective Endpoints & Enhanced Trial Power",
      description: "Quantifiable digital biomarkers (e.g., step counts, gait speed, sleep rhythms) are reproducible and meaningful—helping trials become faster, leaner, and cost-effective.",
      icon: TrendingUp
    },
    {
      title: "Early Detection & Adaptive Monitoring",
      description: "Real-time data enables early signals—like arrhythmias or sleep disturbances—and supports adaptive designs. Trials can adjust dosing or cohorts on the fly based on emerging patterns.",
      icon: Zap
    },
    {
      title: "Validating Next-Gen Biomarker Algorithms", 
      description: "AI-driven endpoints—movement smoothness, autonomic response—must be trained on rich wearable datasets. Continuous data is the cornerstone of next-gen biomarker discovery.",
      icon: Code
    },
    {
      title: "Community-Owned, Decentralized Research",
      description: "Privacy-first platforms powered by wearables foster transparent, participant-led trials. You actively opt in, owning your contribution—a model rooted in trust and empowerment.",
      icon: Shield
    }
  ];

  const communityBenefits = [
    {
      title: "Rapid Scaling",
      description: "Passive data collection means onboarding hundreds to thousands of participants in weeks instead of months.",
      icon: Clock
    },
    {
      title: "Diverse Inclusion", 
      description: "Remote trials attract participants from every ZIP code, age, and background—enabling treatment insights across populations.",
      icon: Globe
    },
    {
      title: "Real-Time Iteration",
      description: "Continuous feedback loops help refine protocols mid-trial—optimizing dosing, inclusion criteria, and endpoints dynamically.",
      icon: Zap
    },
    {
      title: "Collective Innovation",
      description: "Patients, scientists, and developers co-design trials—bringing diverse expertise and lived experience to bear on outcomes.",
      icon: Users
    },
    {
      title: "Accelerated Approval Paths", 
      description: "Objective, digital endpoints fast-track regulatory validation by reducing subjective bias and boosting reproducibility.",
      icon: TrendingUp
    },
    {
      title: "Shared Ownership",
      description: "Transparent governance and data access mean community stakeholders shape trial design—including endpoint validation and data use.",
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-dark-base text-titanium-white relative overflow-hidden">
      {/* Enhanced quantum background effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan/6 via-quantum-purple/4 to-quantum-emerald/5"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-quantum-amber/3 via-quantum-lime/2 to-quantum-indigo/4"></div>
        <div className="w-full h-full bg-[radial-gradient(circle_at_30%_30%,hsl(var(--quantum-cyan))_1px,transparent_1px),radial-gradient(circle_at_70%_70%,hsl(var(--quantum-purple))_1px,transparent_1px)] bg-[length:50px_50px,80px_80px] opacity-20"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative z-10">
        <div className="absolute inset-0 bg-gradient-glassmorphic opacity-30" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              <span className="text-white">
                Patients are the Source of Truth at Curable Labs
              </span>
              <br />
              <span className="text-white">
                — Wearables are the Connection
              </span>
            </h1>
            <p className="text-xl text-titanium-white/90 leading-relaxed max-w-3xl mx-auto">
              At Curable Labs, everything begins with you. Your lived experiences, daily data, and unique insights form the foundation of our mission. Wearables offer a direct line to understanding what truly matters—your real-life health, daily fluctuations, and personal responses to treatment.
            </p>
          </div>
          
          <div className="glass-quantum rounded-2xl p-8 border border-quantum-cyan/30 hover:border-quantum-purple/40 transition-colors duration-300">
            <h3 className="text-2xl font-poppins font-semibold mb-4 text-white">
              Our Mission:
            </h3>
            <p className="text-lg text-titanium-white/90">
              Connect researchers directly with patients through wearables, enabling truly patient-centered research and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* How You Can Be Part of the Solution */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-poppins font-bold text-center mb-16 text-white">
            How You Can Be Part of the Solution
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, index) => {
              const IconComponent = role.icon;
              return (
                <div key={index} className="glass-quantum rounded-xl p-6 border border-quantum-cyan/20 hover:border-quantum-purple/40 hover:bg-quantum-cyan/5 transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-quantum-cyan/20 to-quantum-purple/20 rounded-lg mb-4 group-hover:from-quantum-cyan/30 group-hover:to-quantum-purple/30 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-quantum-cyan group-hover:text-quantum-purple transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold mb-3 text-white">
                    {role.shape}
                  </h3>
                  <p className="text-sm text-titanium-white/80 mb-4">{role.role}</p>
                  <p className="text-sm font-poppins font-medium text-white">
                    {role.impact}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Wearables Matter */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-poppins font-bold text-center mb-4 text-white">
            Why Wearables Matter
          </h2>
          <div className="text-center mb-16">
            <span className="text-3xl">🧠</span>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wearablesBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="glass-quantum rounded-xl p-6 border border-quantum-amber/20 hover:border-quantum-lime/30 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-quantum-amber/20 to-quantum-lime/20 rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-quantum-amber" />
                  </div>
                  <h3 className="text-lg font-poppins font-semibold mb-3 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-titanium-white/80 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Building Community */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-poppins font-bold text-center mb-8 text-white">
            Building a Community for Fast-Track Cures
          </h2>
          <p className="text-xl text-center mb-16 text-titanium-white/80 max-w-3xl mx-auto">
            Wearables not only capture data—they catalyze rapid, inclusive science:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="glass-quantum rounded-xl p-6 border border-quantum-emerald/20 hover:border-quantum-mint/30 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-quantum-emerald/20 to-quantum-mint/20 rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-quantum-emerald" />
                  </div>
                  <h3 className="text-lg font-poppins font-semibold mb-3 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-titanium-white/80 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="absolute inset-0 bg-gradient-glassmorphic opacity-20"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl font-poppins font-bold mb-8 text-white">
            Join Us in Shaping the Future of Health
          </h2>
          <p className="text-xl mb-12 text-titanium-white/80">
            We're recruiting passionate collaborators across three key areas:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-quantum rounded-xl p-6 border border-quantum-indigo/30 hover:border-quantum-purple/40 transition-all duration-300">
              <Heart className="w-12 h-12 text-quantum-indigo mx-auto mb-4" />
              <h3 className="text-xl font-poppins font-semibold mb-3 text-white">
                Patients
              </h3>
              <p className="text-sm text-titanium-white/80">Share your real-world data and lived experience to validate wearables and guide research.</p>
            </div>
            <div className="glass-quantum rounded-xl p-6 border border-quantum-purple/30 hover:border-quantum-fuchsia/40 transition-all duration-300">
              <Activity className="w-12 h-12 text-quantum-purple mx-auto mb-4" />
              <h3 className="text-xl font-poppins font-semibold mb-3 text-white">
                Scientists & Clinicians
              </h3>
              <p className="text-sm text-titanium-white/80">Collaborate on AI-informed wearable tools and define next-gen biomarkers.</p>
            </div>
            <div className="glass-quantum rounded-xl p-6 border border-quantum-fuchsia/30 hover:border-quantum-rose/40 transition-all duration-300">
              <Code className="w-12 h-12 text-quantum-fuchsia mx-auto mb-4" />
              <h3 className="text-xl font-poppins font-semibold mb-3 text-white">
                Developers
              </h3>
              <p className="text-sm text-titanium-white/80">Co-create secure, privacy-first platforms that enable direct patient-to-research data flow.</p>
            </div>
          </div>
          
          <p className="text-lg mb-8 text-titanium-white/80">
            Whether you're here to build, test, design, share, or advocate—there's a place for you at Curable Labs. Together, we're co-creating wearables that aren't just smart—they're revolutionary.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-poppins font-bold mb-8 text-white">
            Ready to join the movement?
          </h2>
          <div className="glass-quantum rounded-2xl p-8 border border-quantum-rose/30 hover:border-quantum-fuchsia/40 transition-colors duration-300">
            <p className="text-xl mb-6 text-titanium-white/90">
              Curable Labs isn't just a project—it's a community-powered revolution in how cures are found and delivered.
            </p>
            <p className="text-lg font-poppins font-medium text-white">
              Your expertise matters. Your data matters. Your voice is the future of medicine.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wearable;
