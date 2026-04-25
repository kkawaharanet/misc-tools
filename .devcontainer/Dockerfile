FROM node:24.15.0

# apt系
# sudoはDocker in Dockerで必要
RUN apt update && apt install -y \
    git \
    tree \
    sudo \
    && rm -rf /var/lib/apt/lists/* \
    && echo "node ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/node

# npm系
RUN npm i -g npm-check-updates

# Claude Codeをnodeユーザーにインストールする
USER node
RUN curl -fsSL https://claude.ai/install.sh | bash
ENV PATH="/home/node/.local/bin:${PATH}"
