LG='\033[1;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo
echo
echo "${LG}STARTED${NC} -----------------> ${YELLOW}Moving Build file to root folder${NC}" 
echo
cp -r build/static .
echo "${YELLOW}...Copied${NC} /static"
cp build/asset-manifest.json . 
echo "${YELLOW}...Copied${NC} asset-manifest.json"
cp build/favicon.ico .
echo "${YELLOW}...Copied${NC} favicon.ico"
cp build/index.html .
echo "${YELLOW}...Copied${NC} index.html"
cp build/manifest.json .
echo "${YELLOW}...Copied${NC} manifest.json"

echo
echo "${LG}COMPLETED${NC} ---------------> ${YELLOW}Moving Build file to root folder${NC}"
echo
echo