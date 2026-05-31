"use client";

import { motion } from "framer-motion";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import { educationData } from "@/data/achievements";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import {
  ScrollReveal,
  GradientText
} from "@/components/animations";

export function About() {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal delay={0.1}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={ANIMATION_VARIANTS.fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              About <GradientText>Me</GradientText>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A bit about who I am, what I do, and where I&apos;m headed.
            </p>
          </motion.div>
        </ScrollReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                I am a Senior Full-Stack Developer with over 9 years of professional experience designing, developing, and deploying scalable web applications and enterprise-grade software solutions.
              </p>
              <p>
                My expertise spans both frontend and backend technologies, enabling me to deliver robust, high-performance applications from concept to production.
              </p>

              <p>
                Throughout my career, I have worked extensively with modern JavaScript frameworks, cloud platforms, RESTful APIs, database architecture, and microservices-based systems.
              </p>
              <p>
                I am passionate about writing clean, maintainable code and building user-centric products that solve real business challenges.
              </p>

              <p>
                In addition to my core full-stack development expertise, I possess strong experience in Blockchain and Artificial Intelligence technologies. These advanced technologies allow me to bring innovative, future-ready solutions to complex projects.
              </p>
              <p>
                I thrive in collaborative environments, enjoy tackling challenging technical problems, and continuously stay up to date with emerging technologies to deliver cutting-edge digital experiences.
              </p>
            </div>

            <div className="relative flex flex-col items-center">
              <div className="absolute -top-24">
                <div className="relative w-75 h-75 rounded-full p-[4px] border-2 border-sky-800 shadow-lg">
                  <div className="rounded-full overflow-hidden w-full h-full relative">
                    <Image
                      src="/me/me.png"
                      alt="Mark"
                      fill
                      sizes="300px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
              <br /><br /><br />

              <div className="pt-40 w-full space-y-4">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={ANIMATION_VARIANTS.fadeUp}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{edu.degree}</h3>
                        <p className="text-primary font-medium">{edu.institution}</p>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {edu.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {edu.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
