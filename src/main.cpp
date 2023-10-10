#include <napi.h>
#include "dispenser/DispenserWrapper.hpp"

Napi::Object InitAll(Napi::Env env, Napi::Object exports) {
  DispenserWrapper::Init(env, exports);
  return exports;
}

NODE_API_MODULE(dispenser_addon, InitAll);