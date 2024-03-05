.PHONY: help
help: ## Display this help.
	@echo "\nUsage:\n  make \033[36m<target>\033[0m\n"
	@awk 'BEGIN {FS = ":.*##"} /^[a-zA-Z_0-9-]+:.*?##/ {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2} /^##@/ {printf "\n\033[1m%s\033[0m\n", substr($$0, 5)} ' $(MAKEFILE_LIST)

##@ General
install: ## Install everything
	make clean
	./docker/scripts/install.sh

clean: ## Clean pnpm store
	rm -rf node_modules .pnpm-store pnpm-lock.yaml

##@ Docker
docker-build: ## Build the Docker image
	@docker build --pull --rm -f "./docker/Dockerfile" -t asmotym-ts-workspace:latest "."

docker-run: ## Run the Docker container
	@docker compose -f "docker-compose.yml" up -d --build

docker-enter: ## Enter the Docker container
	@docker exec -it asmotym-ts-workspace_base bash