.PHONY: help
help: ## Display this help.
	@echo "\nUsage:\n  make \033[36m<target>\033[0m\n"
	@awk 'BEGIN {FS = ":.*##"} /^[a-zA-Z_0-9-]+:.*?##/ {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2} /^##@/ {printf "\n\033[1m%s\033[0m\n", substr($$0, 5)} ' $(MAKEFILE_LIST)

##@ General
install: ## Install everything
	make clean
	@docker exec -it asmotym-ts-workspace_base bash -c "./docker/scripts/install.sh"

clean: ## Clean pnpm store
	@echo "Cleanup files & folders..."
	@docker exec -it asmotym-ts-workspace_base bash -c "rm -rf node_modules .pnpm-store pnpm-lock.yaml apps/front/node_modules packages/ui/node_modules packages/utilities/node_modules"

authorize: ## Authorize sh script execution in docker/scripts/ folder
	chmod +x -R docker/scripts/*

##@ Docker
build: ## Build the Docker image
	make authorize
	@docker/scripts/setup/buildImage.sh

run: ## Run the Docker container
	make authorize
	@docker/scripts/setup/runContainer.sh

enter: ## Enter the Docker container
	make authorize
	@docker/scripts/enterContainer.sh

setup: ## Build & Run the Docker container
	make authorize
	make build
	make run

destroy: ## Destroy the Docker container
	make clean
	@docker/scripts/destroyContainer.sh
