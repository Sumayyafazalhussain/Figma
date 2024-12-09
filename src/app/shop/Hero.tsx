export default function Hero() {
  const heroStyles = {
    hero: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "100vh", // Full height of viewport
      width: "100%", // Full width of viewport
      position: "relative",
      overflow: "hidden",
      flexDirection: "column", // For stacking content and image vertically
    },
    content: {
      position: "absolute",
      left: "10%", // Adjust content position
      zIndex: 2,
      color: "#fff",
      textShadow: "0 1px 3px rgba(0, 0, 0, 0.7)",
    },
    heading: {
      fontSize: "3rem",
      fontWeight: "bold",
    },
    text: {
      fontSize: "1.25rem",
      marginTop: "10px",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover", // Ensures image covers the hero section
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
    },
    secondaryImage: {
      width: "100%", // Full width
      height: "auto", // Maintain aspect ratio
    },
  };

  return (
    <div >
      {/* Hero Section */}
      <img src="b5.png" alt="Hero" />

      {/* New Image Below Hero Section */}
      <img src="filter.png" alt="filter Image" style={heroStyles.secondaryImage} />
    </div>
  );
}