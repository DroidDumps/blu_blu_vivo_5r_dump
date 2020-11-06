#!/bin/bash

cat system/framework/arm64/boot.oat.* 2>/dev/null >> system/framework/arm64/boot.oat
rm -f system/framework/arm64/boot.oat.* 2>/dev/null
cat system/app/WebViewGoogle/WebViewGoogle.apk.* 2>/dev/null >> system/app/WebViewGoogle/WebViewGoogle.apk
rm -f system/app/WebViewGoogle/WebViewGoogle.apk.* 2>/dev/null
cat system/app/Maps/oat/arm64/Maps.odex.* 2>/dev/null >> system/app/Maps/oat/arm64/Maps.odex
rm -f system/app/Maps/oat/arm64/Maps.odex.* 2>/dev/null
cat system/priv-app/GmsCore/oat/arm/GmsCore.odex.* 2>/dev/null >> system/priv-app/GmsCore/oat/arm/GmsCore.odex
rm -f system/priv-app/GmsCore/oat/arm/GmsCore.odex.* 2>/dev/null
cat system/priv-app/GmsCore/oat/arm64/GmsCore.odex.* 2>/dev/null >> system/priv-app/GmsCore/oat/arm64/GmsCore.odex
rm -f system/priv-app/GmsCore/oat/arm64/GmsCore.odex.* 2>/dev/null
