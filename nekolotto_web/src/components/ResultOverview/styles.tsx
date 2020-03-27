import React from "react";
import { themes } from "../../config/themes";

const mixinTable = {
  display: "grid",
  gridTemplateColumns: "1fr 1.3fr 1.3fr 2fr",
  alignItems: "center",
  justifyItems: "center"
};

const styles: { [key: string]: React.CSSProperties } = {
  overviewContainer: {
    position: "relative",
    backgroundColor: "white",
    borderRadius: 12,
    padding: "16px 13px 14px 13px",
    marginLeft: 16,
    marginRight: 16,
    boxShadow: `0 8px 36px 0 #c28f14`,
    maxWidth: 754,
    margin: "0 auto"
  },
  containerHeading: {
    fontSize: themes.fontSize.sm,
    fontWeight: "bold"
  },
  overviewTableHeader: {
    ...mixinTable,
    marginTop: 6,
    fontFamily: "Oswald",
    fontWeight: 300,
    fontSize: themes.fontSize.xs,
    opacity: 0.8
  },
  overviewTableContentContainer: {
    marginTop: 4,
    border: `1px solid ${themes.color.brown}`,
    borderRadius: 2,
    fontFamily: "Oswald",
    fontSize: themes.fontSize.sm,
    color: themes.color.brown,
    letterSpacing: "-0.18px",
    overflow: "hidden"
  },
  tableContentBox: {
    ...mixinTable
  },
  contentChild: {
    width: "100%",
    height: 28,
    lineHeight: "28px",
    textAlign: "center",
    overflow: "hidden",
    whiteSpace: "nowrap",
    borderBottom: `1px solid ${themes.color.brown}`,
    boxSizing: "content-box"
  },
  cellBrown: {
    borderBottom: `1px solid white`,
    backgroundColor: themes.color.brown,
    color: "white"
  },
  lastChild: {
    borderBottom: "unset"
  }
};

export default styles;
