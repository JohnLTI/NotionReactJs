import React from "react";
import ReactDOM from "react-dom/client";
import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Sparkle,
  User,
} from "@phosphor-icons/react";

import "./global.css";
import ttlogo from "./assets/logo-twitter.svg";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="layout">
      <aside className="sidebar">
        <img className="logo" src={ttlogo} alt="Logo" />
        <nav className="main-navigation">
          <a className="active" href="">
            <House weight="fill" />
            Home
          </a>
          <a className="" href="">
            <Hash />
            Explore
          </a>
          <a className="" href="">
            <Bell />
            Notifications
          </a>
          <a className="" href="">
            <Envelope />
            Messages
          </a>
          <a className="" href="">
            <BookmarkSimple />
            Bookmarks
          </a>
          <a className="" href="">
            <FileText />
            Lists
          </a>
          <a className="" href="">
            <User />
            Profile
          </a>
          <a className="" href="">
            <DotsThreeCircle />
            More
          </a>
        </nav>
        <button className="new-tweet" type="button">
          Tweet
        </button>
      </aside>
      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            Home
            <Sparkle />
          </div>
          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/JohnLTI.png" alt="Foto Usuario" />
              <textarea
                id="tweet"
                name="tweet"
                placeholder="What's happening?"
              />
            </label>

            <button type="submit">Tweet</button>
          </form>
          form
        </main>
      </div>
    </div>
  </React.StrictMode>
);
