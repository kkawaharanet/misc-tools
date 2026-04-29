FROM node:24.15.0

# apt系
# sudoはDocker in Dockerで必要
RUN apt update && apt install -y \
    git \
    tree \
    sudo \
    && rm -rf /var/lib/apt/lists/* \
    && echo "node ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/node

# Tauri/Rust系
# https://v2.tauri.app/start/prerequisites/
RUN apt update && apt install -y \
    libwebkit2gtk-4.1-dev \
    build-essential \
    curl \
    wget \
    file \
    libxdo-dev \
    libssl-dev \
    libayatana-appindicator3-dev \
    librsvg2-dev \
    && rm -rf /var/lib/apt/lists/*

# npm系
RUN npm i -g npm-check-updates

# Claude Codeをnodeユーザーにインストールする
USER node
RUN curl -fsSL https://claude.ai/install.sh | bash
ENV PATH="/home/node/.local/bin:${PATH}"
