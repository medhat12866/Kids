import { useState, useEffect } from "react";
import { BottomNavigation } from "./components/BottomNavigation";
import { TopNavigation } from "./components/TopNavigation";
import { HomePage } from "./pages/HomePage";
import { VideosPage } from "./pages/VideosPage";
import { VideoPlayerPage } from "./pages/VideoPlayerPage";
import { StoriesPage } from "./pages/StoriesPage";
import { StoryReaderPage } from "./pages/StoryReaderPage";
import { GamesPage } from "./pages/GamesPage";
import { ActivitiesPage } from "./pages/ActivitiesPage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { ProfilePage } from "./pages/ProfilePage";
import { ParentDashboardPage } from "./pages/ParentDashboardPage";
import DashboardPage from "./pages/DashboardPage";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { AppProvider } from "./contexts/AppContext";
import "./styles/globals.css";
import { Footer } from "./components/Footer";

type PageType =
  | "home"
  | "videos"
  | "video-player"
  | "stories"
  | "story-reader"
  | "games"
  | "activities"
  | "favorites"
  | "profile"
  | "parent-dashboard"
  | "admin-dashboard";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const [selectedId, setSelectedId] = useState<number | undefined>();

  // Sync with URL
  useEffect(() => {
    const path = window.location.pathname.slice(1) || "home";
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (path && path !== currentPage) {
      setCurrentPage(path as PageType);
      if (id) setSelectedId(parseInt(id));
    }
  }, []);

  const handleNavigate = (page: string, id?: number) => {
    setCurrentPage(page as PageType);
    setSelectedId(id);

    // Update URL without page reload
    const url = id ? `/${page}?id=${id}` : `/${page}`;
    window.history.pushState({}, "", url);

    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.slice(1) || "home";
      const params = new URLSearchParams(window.location.search);
      const id = params.get("id");

      setCurrentPage(path as PageType);
      if (id) setSelectedId(parseInt(id));
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "videos":
        return <VideosPage onNavigate={handleNavigate} />;
      case "video-player":
        return (
          <VideoPlayerPage videoId={selectedId} onNavigate={handleNavigate} />
        );
      case "stories":
        return <StoriesPage onNavigate={handleNavigate} />;
      case "story-reader":
        return (
          <StoryReaderPage storyId={selectedId} onNavigate={handleNavigate} />
        );
      case "games":
        return <GamesPage onNavigate={handleNavigate} />;
      case "activities":
        return <ActivitiesPage onNavigate={handleNavigate} />;
      case "favorites":
        return <FavoritesPage onNavigate={handleNavigate} />;
      case "profile":
        return <ProfilePage onNavigate={handleNavigate} />;
      case "parent-dashboard":
        return <ParentDashboardPage onNavigate={handleNavigate} />;
      case "admin-dashboard":
        return <DashboardPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  // Pages that should not show navigation
  const hideNavigation =
    currentPage === "video-player" ||
    currentPage === "story-reader" ||
    currentPage === "parent-dashboard" ||
    currentPage === "admin-dashboard";

  return (
    <ErrorBoundary>
      <AppProvider>
        <div className="min-h-screen bg-background">
          {/* Top Navigation - Desktop */}
          {!hideNavigation && (
            <TopNavigation
              currentPage={currentPage}
              onNavigate={handleNavigate}
            />
          )}

          {/* Main Content */}
          <main
            className={`${!hideNavigation ? "pb-24 md:pb-8" : ""} ${
              !hideNavigation ? "pt-4" : ""
            }`}
          >
            <div className={hideNavigation ? "" : "max-w-[1280px] mx-auto"}>
              {renderPage()}
            </div>
          </main>

          {/* Bottom Navigation - Mobile */}
          {!hideNavigation && (
            <BottomNavigation
              currentPage={currentPage}
              onNavigate={handleNavigate}
            />
          )}

          {!hideNavigation && (
            <Footer currentPage={currentPage} onNavigate={handleNavigate} />
          )}
        </div>
      </AppProvider>
    </ErrorBoundary>
  );
}
