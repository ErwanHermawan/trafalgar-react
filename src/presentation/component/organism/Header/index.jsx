// --- core
import { Link } from "react-router-dom";
import { useState, useEffect, useRef, useLayoutEffect } from "react";

// --- component
import Logo from "presentation/component/atom/Logo";
import navMenu from "./headerData";

import style from "./style.module.scss";

const Header = ({ activeMenu }) => {
	// show navigation menu
	const [showNavigation, setShowNavigation] = useState(false);
	const handleToggleNavigation = () => {
		setShowNavigation(!showNavigation);
	};

	// Sticky Menu Area
	const ref = useRef(null);

	const [height, setHeight] = useState(0);

	// use layout effect
	useLayoutEffect(() => {
		setHeight(ref.current.offsetHeight);
	}, []);

	const [sticky, setSticky] = useState("");

	// on render, set listener
	useEffect(() => {
		window.addEventListener("scroll", isSticky);
		return () => {
			window.removeEventListener("scroll", isSticky);
		};
		// eslint-disable-next-line
	}, []);

	let _lastScrollTop = 0;
	let _delta = 4;
	let _headerHeight = height / 2;
	// sticky header
	const isSticky = () => {
		let _stickyClass = style.header;
		const _scrollTop = window.scrollY;

		if (Math.abs(_lastScrollTop - _scrollTop) <= _delta) {
			return;
		}

		// --- Scroll Down
		if (_scrollTop > _lastScrollTop && _scrollTop > _headerHeight) {
			// document.querySelector("body").classList.add("scroll-down");
			_stickyClass = " " + style.headerScrollDown;
		} else {
			// --- Scroll Up
			if (_scrollTop + window.screen.height < document.body.clientHeight) {
				// document.querySelector("body").classList.remove("scroll-down");
				if (_scrollTop > _headerHeight) {
					// document.querySelector("body").classList.add("header-on-scroll");
					_stickyClass =
						" " + style.headerScrollDown + " " + style.headerOnScroll;
				} else {
					// document.querySelector("body").classList.remove("header-on-scroll");
				}
			}
		}

		_lastScrollTop = _scrollTop;

		setSticky(_stickyClass);
	};

	return (
		<div
			className={
				showNavigation
					? `${style.header} ${style.show}`
					: `${style.header} ${sticky}`
			}
		>
			<div className="container">
				<div className={style.wrapper} ref={ref}>
					<Link to="/" className={style.logo}>
						<Logo
							filename="trafalgar.svg"
							name="Trafalgar Logo"
							className={style.logoImg}
						/>
					</Link>
					<button
						className={style.burgerMenu}
						type="button"
						onClick={handleToggleNavigation}
					>
						<span className={style.burgerMenuBar}></span>
					</button>
					<ul className={style.nav}>
						{navMenu.menu.map((val, idx) => (
							<li key={`mn-${idx}`} className={style.navItem}>
								<Link
									className={
										val.active === activeMenu
											? style.navLink + " " + style.navLinkActive
											: style.navLink
									}
									to={val.to}
								>
									{val.text}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
