import React, { useState, useRef, useEffect } from 'react';
import historyData from '../../data/history-data';

const CompanyHistory = () => {
    const [offsets, setOffsets] = useState(historyData.map(() => 0));
    const [tilts, setTilts] = useState(historyData.map(() => 0));
    const [activeDragIndex, setActiveDragIndex] = useState(null);

    const dragStartY = useRef(0);
    const dragStartOffset = useRef(0);
    const activeIndexRef = useRef(null);
    const lastY = useRef(0);
    const lastTime = useRef(0);

    const maxOffset = 150; // Maximum deviation from original position

    useEffect(() => {
        if (activeDragIndex === null) return;

        const handleMove = (e) => {
            if (activeIndexRef.current === null) return;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            const deltaY = clientY - dragStartY.current;
            
            // Calculate speed for dynamic swing/tilt
            const now = Date.now();
            const timeDiff = now - lastTime.current;
            const yDiff = clientY - lastY.current;
            let currentTilt = 0;
            if (timeDiff > 0) {
                const speed = yDiff / timeDiff; // pixels/ms
                // Clamp speed tilt between -10 and 10 degrees
                currentTilt = Math.max(-10, Math.min(10, speed * 18));
            }
            
            lastY.current = clientY;
            lastTime.current = now;

            const idx = activeIndexRef.current;
            
            setOffsets(prev => {
                const next = [...prev];
                next[idx] = Math.max(-maxOffset, Math.min(maxOffset, dragStartOffset.current + deltaY));
                return next;
            });

            setTilts(prev => {
                const next = [...prev];
                next[idx] = currentTilt;
                return next;
            });
        };

        const handleEnd = () => {
            const idx = activeIndexRef.current;
            if (idx !== null) {
                // Decay/spring back tilt to zero
                setTilts(prev => {
                    const next = [...prev];
                    next[idx] = 0;
                    return next;
                });
            }
            setActiveDragIndex(null);
            activeIndexRef.current = null;
        };

        window.addEventListener('mousemove', handleMove);
        window.addEventListener('mouseup', handleEnd);
        window.addEventListener('touchmove', handleMove, { passive: false });
        window.addEventListener('touchend', handleEnd);

        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', handleEnd);
        };
    }, [activeDragIndex]);

    const startDrag = (index, e) => {
        // Only trigger drag on primary click or touch
        if (e.button && e.button !== 0) return;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        dragStartY.current = clientY;
        dragStartOffset.current = offsets[index];
        activeIndexRef.current = index;
        lastY.current = clientY;
        lastTime.current = Date.now();
        setActiveDragIndex(index);
    };

    return (
        <div className="history__area section-padding" style={{ background: '#fbfaf7', overflow: 'hidden' }}>
            <div className="container">
                <div className="row justify-content-center mb-50">
                    <div className="col-lg-8 text-center">
                        <div className="section-title-center">
                            <h2 className="mb-20">Milestones of Excellence</h2>
                            <div className="underline-bar mb-20 mx-auto"></div>
                            <p className="subtitle-text">
                                Three decades of growth, innovation, and trust (Drag the flags to slide them along the mast!)
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="timeline__container">
                            {/* Decorative 3D Pole Caps */}
                            <div className="timeline__pole-cap-top"></div>
                            <div className="timeline__line"></div>
                            <div className="timeline__pole-cap-bottom"></div>
                            
                            {historyData.map((item, id) => {
                                const isRightSide = id % 2 === 0;
                                const isDragging = activeDragIndex === id;
                                const delay = `${0.2 + id * 0.1}s`;
                                
                                const itemStyle = {
                                    transform: `translateY(${offsets[id]}px)`,
                                    transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
                                    zIndex: isDragging ? 100 : 10,
                                };

                                const cardStyle = {
                                    transform: `perspective(1200px) rotateY(${isRightSide ? '14deg' : '-14deg'}) rotateX(${-tilts[id]}deg) rotateZ(${isRightSide ? tilts[id] * 0.25 : -tilts[id] * 0.25}deg) translateZ(0)`,
                                    transition: isDragging ? 'transform 0.05s ease-out, box-shadow 0.3s ease' : 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease',
                                    boxShadow: isDragging 
                                        ? '0 30px 60px rgba(0,0,0,0.15), 0 10px 20px rgba(0,0,0,0.1)' 
                                        : '0 10px 30px rgba(0,0,0,0.03)',
                                    borderLeft: isRightSide ? `6px solid ${item.color}` : 'none',
                                    borderRight: !isRightSide ? `6px solid ${item.color}` : 'none',
                                };

                                return (
                                    <div className="timeline__item-wrapper wow fadeInUp" data-wow-delay={delay} key={id}>
                                        <div 
                                            className="timeline__item" 
                                            style={itemStyle}
                                        >
                                            {/* 3D collar (sleeve) sliding along the pole */}
                                            <div className="timeline__collar">
                                                <div className="timeline__dot-glow" style={{ backgroundColor: item.color, boxShadow: `0 0 12px ${item.color}, 0 0 4px ${item.color}` }}></div>
                                            </div>

                                            {/* 3D horizontal metallic bracket/arm */}
                                            <div className={`timeline__bracket timeline__bracket--${isRightSide ? 'right' : 'left'}`}></div>

                                            {/* Flag Card */}
                                            <div 
                                                className="timeline__card" 
                                                style={cardStyle}
                                                onMouseDown={(e) => startDrag(id, e)}
                                                onTouchStart={(e) => startDrag(id, e)}
                                            >
                                                {/* Drag Indicator Handle */}
                                                <div className="timeline__drag-handle">
                                                    <i className="fa-solid fa-grip-lines-vertical"></i>
                                                </div>

                                                <div className="timeline__header">
                                                    <div className="timeline__icon-wrapper" style={{ backgroundColor: item.bgColor, color: item.color }}>
                                                        <i className={item.icon}></i>
                                                    </div>
                                                    <div className="timeline__year-info">
                                                        <h3 style={{ color: 'var(--text-heading-color)', margin: '0' }}>{item.date}</h3>
                                                        <span style={{ color: item.color, fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{item.title}</span>
                                                    </div>
                                                </div>
                                                <p className="timeline__desc">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyHistory;