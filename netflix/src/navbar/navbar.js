import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export function Navbar({ offset }) {
  return (
    <div
      className="navbar"
      style={{
        backgroundColor: offset > 100 && "black",
        transitionDuration: "1s",
      }}
    >
      <div className="nav-left">
        <Link to="/">
          <img
            className="logo"
            src={`https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png`}
          />
        </Link>

        <div className="nav-left1">
          <Link to="/">
            <p className="nav-menu">Home</p>
          </Link>
          <Link to="tv-shows">
            <p className="nav-menu">TV Shows</p>
          </Link>
          <p className="nav-menu">Movies</p>
          <p className="nav-menu">Latest</p>
          <p className="nav-menu">My List</p>
          <p className="nav-menu">Browse by Languages</p>
        </div>
      </div>
      <div className="nav-right">
        <svg
          className="nav-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
        </svg>
        <svg
          className="nav-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M256 32V49.88C328.5 61.39 384 124.2 384 200V233.4C384 278.8 399.5 322.9 427.8 358.4L442.7 377C448.5 384.2 449.6 394.1 445.6 402.4C441.6 410.7 433.2 416 424 416H24C14.77 416 6.365 410.7 2.369 402.4C-1.628 394.1-.504 384.2 5.26 377L20.17 358.4C48.54 322.9 64 278.8 64 233.4V200C64 124.2 119.5 61.39 192 49.88V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32V32zM216 96C158.6 96 112 142.6 112 200V233.4C112 281.3 98.12 328 72.31 368H375.7C349.9 328 336 281.3 336 233.4V200C336 142.6 289.4 96 232 96H216zM288 448C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288z" />
        </svg>
        <img
          className="nav-user-pro"
          src={
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          }
        />
        <svg
          className="nav-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
        </svg>
      </div>
    </div>
  );
}
