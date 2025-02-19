'use client';

import React from 'react';
import { useState, useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

interface FireParticlesProps {
  isHovered: boolean;
}

const FireParticles: React.FC<FireParticlesProps> = ({ isHovered }) => {

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        console.log(container);
    }, []);

    return (
        <div>
            <div className="relative flex justify-center items-center z-10 ">
            <Particles
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{
                            "particles": {
                              "number": {
                                "value": 80,
                                "density": {
                                  "enable": true,
                                  "value_area": 800
                                }
                              },
                              "color": {
                                "value": "#ffffff"
                              },
                              "shape": {
                                "type": "circle",
                                "stroke": {
                                  "width": 0,
                                  "color": "#000000"
                                },
                                "polygon": {
                                  "nb_sides": 5
                                },
                                "image": {
                                  "src": "img/github.svg",
                                  "width": 100,
                                  "height": 100
                                }
                              },
                              "opacity": {
                                "value": 0.5,
                                "random": false,
                                "anim": {
                                  "enable": false,
                                  "speed": 1,
                                  "opacity_min": 0.1,
                                  "sync": false
                                }
                              },
                              "size": {
                                "value": 3,
                                "random": true,
                                "anim": {
                                  "enable": false,
                                  "speed": 40,
                                  "size_min": 0.1,
                                  "sync": false
                                }
                              },
                              "line_linked": {
                                "enable": false,
                                "distance": 150,
                                "color": "#ffffff",
                                "opacity": 0.4,
                                "width": 1
                              },
                              "move": {
                                "enable": true,
                                "speed": 6,
                                "direction": "top-left",
                                "random": true,
                                "straight": false,
                                "out_mode": "out",
                                "bounce": false,
                                "attract": {
                                  "enable": false,
                                  "rotateX": 600,
                                  "rotateY": 1200
                                }
                              }
                            },
                            "interactivity": {
                              "detect_on": "canvas",
                              "events": {
                                "onhover": {
                                  "enable": false,
                                  "mode": "repulse"
                                },
                                "onclick": {
                                  "enable": false,
                                  "mode": "push"
                                },
                                "resize": true
                              },
                              "modes": {
                                "grab": {
                                  "distance": 400,
                                  "line_linked": {
                                    "opacity": 1
                                  }
                                },
                                "bubble": {
                                  "distance": 400,
                                  "size": 40,
                                  "duration": 2,
                                  "opacity": 8,
                                  "speed": 3
                                },
                                "repulse": {
                                  "distance": 200,
                                  "duration": 0.4
                                },
                                "push": {
                                  "particles_nb": 4
                                },
                                "remove": {
                                  "particles_nb": 2
                                }
                              }
                            },
                            "retina_detect": true
                          }}
            />            
            </div>
        </div>
    )
};

export default FireParticles;